<?php

namespace BestFinance\BestBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ContactController extends Controller
{
    public function indexAction()
    {
        return $this->render('BestFinanceBestBundle:Front:index.html.twig');
    }
}
