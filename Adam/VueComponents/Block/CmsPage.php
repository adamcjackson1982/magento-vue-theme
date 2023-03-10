<?php
namespace Adam\VueComponents\Block;

use Magento\Cms\Model\Page;
use Magento\Framework\View\Element\Template;

class CmsPage extends Template
{
    /**
     * @var Page
     */
    protected $cmsPage;

    /**
     * @var \Magento\Theme\Block\Html\Header\Logo
     */
    protected $logo;

    protected $_categoryFactory;

    protected $_storeManager;

    /**
     * CmsPage constructor.
     *
     * @param Template\Context $context
     * @param Page $cmsPage
     * @param \Magento\Theme\Block\Html\Header\Logo $logo
     * @param array $data
     */
    public function __construct(
        Template\Context $context,
        Page $cmsPage,
        \Magento\Theme\Block\Html\Header\Logo $logo,
        \Magento\Catalog\Model\CategoryFactory $categoryFactory,
        \Magento\Store\Model\StoreManagerInterface $storeManager, 
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->cmsPage = $cmsPage;
        $this->logo = $logo;
        $this->_categoryFactory = $categoryFactory;
        $this->_storeManager = $storeManager;    
    }

    /**
     * Get CMS page identifier.
     *
     * @return string
     */
    public function getCmsPageIdentifier()
    {
        return $this->cmsPage->getIdentifier();
    }

    /**
     * Get page meta title.
     *
     * @return string
     */
    public function getPageMetaTitle()
    {
        $pageTitle = $this->cmsPage->getTitle();
        return $pageTitle;
    }

    /**
     * Get logo source and alt.
     *
     * @return array
     */
    public function getLogoData()
    {
        $src = $this->logo->getLogoSrc();
        $alt = $this->logo->getLogoAlt();
        return ['src' => $src, 'alt' => $alt];
    }


    public function getRootCategoryId()
    {
        $store = $this->getWebsiteId();
        $rootCatId = $this->_storeManager->getStore($store)->getRootCategoryId();
        return $rootCatId;
    }


    /**
     * Get children categories
     *
     * @param $categoryId Parent category id
     * @return Magento\Catalog\Model\ResourceModel\Category\Collection
     */
    public function getChildCategories($categoryId)
    {

        $_category = $this->_categoryFactory->create();
        $category = $_category->load($categoryId);

        //Get category collection
        $collection = $category->getCollection()
                ->addAttributeToSelect('*')
                ->addAttributeToFilter('is_active','1')
                ->addAttributeToFilter('include_in_menu', 1)
                ->addOrderField('position' , 'ASC')
                ->addIdFilter($category->getChildren());
        return $collection;
    }
}
