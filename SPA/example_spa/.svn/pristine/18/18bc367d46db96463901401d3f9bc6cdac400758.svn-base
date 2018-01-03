<?php

/** Load Layout rewite plugin */
require_once 'Plugins/PluginLoader.php';
require_once 'Plugins/LayoutRewrite.php';

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
    protected function _initDoctype()
    {
        $this->bootstrap('view');
        $view = $this->getResource('view');
        $view->doctype('XHTML1_STRICT');
    }
    
    protected function _initViewHelpers()
    {
	$view = new Zend_View();
	$viewRenderer = new Zend_Controller_Action_Helper_ViewRenderer();
 
	$view->addHelperPath('ZendX/JQuery/View/Helper/', 'ZendX_JQuery_View_Helper');
	$viewRenderer->setView($view);
        
	Zend_Controller_Action_HelperBroker::addHelper($viewRenderer);
    }
    
    /**
     * Register plugins
     * @return void
     */
    protected function _initPlugins()
    {
        $front = Zend_Controller_Front::getInstance();
        $front->registerPlugin(new Plugins_PluginLoader());
    }
}

