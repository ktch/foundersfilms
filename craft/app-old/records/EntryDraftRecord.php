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

Craft::requirePackage(CraftPackage::PublishPro);

/**
 * Stores entry drafts
 */
class EntryDraftRecord extends BaseRecord
{
	/**
	 * @return string
	 */
	public function getTableName()
	{
		return 'entrydrafts';
	}

	/**
	 * @access protected
	 * @return array
	 */
	protected function defineAttributes()
	{
		return array(
			'locale' => array(AttributeType::Locale, 'required' => true),
			'name'   => array(AttributeType::String),
			'data'   => array(AttributeType::Mixed, 'required' => true, 'column' => ColumnType::MediumText),
		);
	}

	/**
	 * @return array
	 */
	public function defineRelations()
	{
		return array(
			'entry'   => array(static::BELONGS_TO, 'EntryRecord', 'required' => true, 'onDelete' => static::CASCADE),
			'section' => array(static::BELONGS_TO, 'SectionRecord', 'required' => true, 'onDelete' => static::CASCADE),
			'creator' => array(static::BELONGS_TO, 'UserRecord', 'required' => true, 'onDelete' => static::CASCADE),
			'locale'  => array(static::BELONGS_TO, 'LocaleRecord', 'locale', 'required' => true, 'onDelete' => static::CASCADE, 'onUpdate' => static::CASCADE),
		);
	}

	/**
	 * @return array
	 */
	public function defineIndexes()
	{
		return array(
			array('columns' => array('entryId', 'locale')),
		);
	}
}
