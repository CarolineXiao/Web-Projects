<?php

class ApiController extends Zend_Controller_Action
{
    /**
     * @link http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
     */
    public function init()
    {
        $this->_helper->layout->disableLayout();
        $this->_helper->viewRenderer->setNoRender(true);
    }

    public function indexAction()
    {
        $guestbook = new Application_Model_GuestbookMapper();
        $entries = $guestbook->fetchAll();
        
        $response = array('code' => 200, 'entries' => $entries);
        $this->_helper->json($response);
    }

    public function postAction()
    {
        $request = $this->getRequest();
        $form = new Application_Form_Guestbook();

        if ($this->getRequest()->isPost()) {
            if ($form->isValid($request->getPost())) {
                $comment = new Application_Model_Guestbook($form->getValues());
                $guestbookMapper = new Application_Model_GuestbookMapper();
                $id = $guestbookMapper->save($comment);
                $response = array('code' => 204, 'id' => $id);
            } else {
                $errors = array();
                $errorMessages = $form->getMessages();
                foreach($errorMessages as $key => $value) {
                    $errors[$key] = array_pop($value);
                }
                $response = array('code' => 400, 'errors' => $errors);
            }
        }
        $this->_helper->json($response);
    }

    public function getAction() {
        $request = $this->getRequest();
        $guestbookMapper = new Application_Model_GuestbookMapper();
        $entry = $guestbookMapper->find($request->id);
        
        $response = array('code' => 200, 'entry' => $entry);
        $this->_helper->json($response);
    }
    
    public function deleteAction() {
        $request = $this->getRequest();
        
        if ($this->getRequest()->isPost()) {
            $guestbookMapper = new Application_Model_GuestbookMapper();
            $guestbookMapper->delete($request->id);
            $response = array('code' => 204);
        }
        $this->_helper->json($response);
    }
    
    public function putAction() {
        $request = $this->getRequest();
        $form = new Application_Form_Guestbook();

        if ($this->getRequest()->isPost()) {
            if ($form->isValid($request->getPost())) {
                $guestbook = new Application_Model_Guestbook();
                $guestbook->setId($request->id);
                $guestbook->setEmail($request->email);
                $guestbook->setComment($request->comment);
        
                $guestbookMapper = new Application_Model_GuestbookMapper();
                $guestbookMapper->save($guestbook);
                $response = array('code' => 204);
            } else {
                $response = array('code' => 400);
            }
        }
        $this->_helper->json($response);
    }

}



