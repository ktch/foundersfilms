<?php
namespace Craft;

/**
 * Craft by Pixel & Tonic
 *
 * @package   Craft
 * @author    Pixel & Tonic, Inc.
 * @copyright Copyright (c) 2013, Pixel & Tonic, Inc.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://buildwithcraft.com
 */

/**
 * Element type interface
 */
interface IElementType extends IComponentType
{
	/**
	 * @return bool
	 */
	public function hasTitles();

	/**
	 * @return bool
	 */
	public function hasStatuses();

	/**
	 * @return bool
	 */
	public function hasThumbs();

	/**
	 * @return bool
	 */
	public function isTranslatable();

	/**
	 * @param string|null $context
	 * @return array
	 */
	public function getSources($context = null);

	/**
	 * @return array
	 */
	public function defineSearchableAttributes();

	/**
	 * @return array
	 */
	public function defineTableAttributes($source = null);

	/**
	 * @return array
	 */
	public function defineCriteriaAttributes();

	/**
	 * @param DbCommand $query
	 * @param string $status
	 * @return string|false
	 */
	public function getElementQueryStatusCondition(DbCommand $query, $status);

	/**
	 * @param DbCommand $query
	 * @param ElementCriteriaModel $criteria
	 * @return null|false
	 */
	public function modifyElementsQuery(DbCommand $query, ElementCriteriaModel $criteria);

	/**
	 * @param array $row
	 * @return BaseModel
	 */
	public function populateElementModel($row);

	/**
	 * @param BaseElementModel
	 * @return mixed
	 */
	public function routeRequestForMatchedElement(BaseElementModel $element);
}
