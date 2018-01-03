<?php

class Plugins_PluginLoader extends Zend_Controller_Plugin_Abstract
{
    /**
     * dispatchLoopStartup() is called before Zend_Controller_Front enters its dispatch loop 
     * @param Zend_Controller_Request_Abstract $request
     */
    public function dispatchLoopStartup(Zend_Controller_Request_Abstract $request)
    {
        $front = Zend_Controller_Front::getInstance();
        $front->registerPlugin(new Plugins_LayoutRewrite());
    }
}