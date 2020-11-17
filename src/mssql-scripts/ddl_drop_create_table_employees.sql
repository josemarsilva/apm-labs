-- ----------------------------------------------------------------------------
--
-- ----------------------------------------------------------------------------
IF OBJECT_ID('dbo.tbl_employees', 'U') IS NOT NULL
  BEGIN
    PRINT 'DROP TABLE [dbo].[tbl_employees]';
	DROP TABLE [dbo].[tbl_employees];
END;
PRINT 'CREATE TABLE [dbo].[tbl_employees]';
CREATE TABLE [dbo].[tbl_employees]
(
	[id]      [int]             NOT NULL,
	[name]    [nvarchar] (100)  NOT NULL,
	[salary]  [int]             NOT NULL,
	--
PRIMARY KEY CLUSTERED 
	(
	  [id] ASC
	) 
);
GO
