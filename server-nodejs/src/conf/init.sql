DROP TABLE `POST`;
DROP TABLE `TAG`;

CREATE TABLE `POST` (
`ID` int(255) NOT NULL AUTO_INCREMENT COMMENT 'ID',
`TAG_ID` int(255) NULL COMMENT '文章所属标签ID',
`CREATE_TIME` datetime NOT NULL COMMENT '文章创建时间',
`MODIFY_TIME` datetime NULL DEFAULT NULL COMMENT '文章修改时间',
`TITLE` varchar(255) NOT NULL COMMENT '文章标题',
`CONTENT` varchar(0) NULL DEFAULT NULL COMMENT '文章正文',
`IS_PUBLISH` tinyint(1) NULL DEFAULT 0 COMMENT '文章发布状态',
`IS_RECOMMEND` tinyint(1) NULL DEFAULT 0 COMMENT '是否推荐',
PRIMARY KEY (`ID`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
ROW_FORMAT = dynamic;

CREATE TABLE `TAG` (
`ID` int(255) NOT NULL AUTO_INCREMENT,
`NAME` varchar(255) CHARACTER SET gbk NOT NULL DEFAULT '',
`CREATE_TIME` datetime NOT NULL,
`MODIFY_TIME` datetime NULL DEFAULT NULL,
PRIMARY KEY (`ID`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_general_ci
ROW_FORMAT = dynamic;
