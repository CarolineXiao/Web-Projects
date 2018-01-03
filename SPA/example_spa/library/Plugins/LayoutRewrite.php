<?php

class Plugins_LayoutRewrite extends Zend_Controller_Plugin_Abstract {

    public function preDispatch(Zend_Controller_Request_Abstract $request) {
        $layout = Zend_Layout::getMvcInstance();

        $attributes = array();
        $attributes['class'] = array();
        $attributes['class']['modules'] = $request->getModuleName();
        $attributes['class']['controller'] = $attributes['class']['modules']
                . '-' . $request->getControllerName();
        $attributes['class']['action'] = $attributes['class']['controller']
                . '-' . $request->getActionName();

        $attributes['lang'] = 'en';

        $module = $request->getModuleName();
        $controller = $request->getControllerName();
        $view = Zend_Layout::getMvcInstance()->getView();
        $cookie = $_COOKIE;

        //$conf = Zend_Registry::get('application');
        $config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/application.ini', APPLICATION_ENV);

        foreach ($attributes as $attributeKey => $attributeValues) {
            $attributeString = " {$attributeKey}='";
            if (is_array($attributeValues)) {
                foreach ($attributeValues as $subValue) {
                    $attributeString .= "{$subValue} ";
                }
            } else {
                $attributeString .= $attributeValues;
            }
        }

        $layout->attrs = rtrim($attributeString) . "'";
        $layout->codeBaseUrl = $config->api->application->media->uri;

        $view->addBasePath(APPLICATION_PATH . '/layouts/scripts/');
        $view->addBasePath(APPLICATION_PATH . "/layouts/scripts/common/");

        $layout->setLayout('layout');
    }

}