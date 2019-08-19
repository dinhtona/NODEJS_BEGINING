EXEC dbo.USP_Customer_GetListOrder_Details @mancc = 'CLID01', -- varchar(10)
--    @madh = 'CLID01-053-19' -- varchar(20)

--	EXEC dbo.USP_Customer_Login @jdata = N'' -- nvarchar(max)

--delete FROM dbo.tbl_customer_xuathang_details WHERE nguoilap='dinhtuyen'
--delete FROM dbo.tbl_customer_xuathang WHERE nguoilap='tonadinh'
SELECT TENMATHANG FROM VIEW_MATHANG WHERE id_thamchieu='" + Module1.StrIdmaDhhb + "'


SELECT * FROM dbo.tbl_phieunhapxuat WHERE makien='KTP06195133'

SELECT * FROM tbl_lenhtangca
SELECT * FROM tbl_nhanvien_tangca

SELECT * FROM dbo.tbl_customer_xuathang
EXEC USP_Customer_GetListOrders @jdata ='{"username":"dinhtuyen", "mancc":"clid01", "madh":"CLID01-045-19"}'
EXEC USP_Customer_Login
SELECT * FROM dbo.UFN_Customer_Login()

SELECT * FROM dbo.tbl_customer_xuathang_details WHERE madh='CLID01-038-19'
--delete tbl_customer_xuathang where nguoilap IS NULL OR nguoilap ='' OR nguoilap='dinhtuyen' WHERE madh IS null

EXEC USP_Customer_GetListOrders



EXEC dbo.USP_Customer_SavePhieuxuat @jdata = N'' -- nvarchar(max)

SELECT * FROM dbo.UFN_Customer_Getdonhang_vattu()

SELECT  madh, nguoilap, ngaylap, ngaydathang, ngaygiaohang, MIN(tylexuat) AS tylexuat FROM UFN_Customer_Getlist_DeliveryBill_Details('dinhtuyen')
GROUP BY madh, nguoilap, ngaylap, ngaydathang, ngaygiaohang
EXEC USP_Customer_Getlist_DeliveryBill'{"username":"dinhtuyen"}'
EXEC USP_Customer_GetList_DeliveryBill_Details

SELECT * FROM dbo.tbl_customer_xuathang_details

update dbo.tbl_customer_user SET ran=RAND() WHERE id=5
0.647770886270232
--ALTER TABLE tbl_customer_user
--ADD iduser int;
SELECT * FROM dbo.tbl_customer_user_details
SELECT * FROM dbo.tbl_customer_user

EXEC dbo.USP_Customer_SavePhieuxuat @jdata = N'' -- nvarchar(max)


SELECT dbo.UFN_Customer_GetFullName('dinhtuyen')
EXEC USP_Customer_Getlist_DeliveryBill'{"username":"dinhtuyen"}'

SELECT RAND()

EXEC pro_get_phieuchuyenkho_edit

--DROP FUNCTION UFN_Customer_Getlist_DeliveryBill

EXEC dbo.USP_Customer_GetListOrder_Details @mancc = 'dinhtuyen', -- varchar(10)
    @madh = '' -- varchar(20)

	select mancc, taikhoan from  UFN_Customer_Login('{"username":"dinhtuyen", "password":"qwe"}')

EXEC UFN_Customer_Getdonhang_vattu	
	
	CREATE TABLE tbl_customer_xuathang(
	id INT UNIQUE IDENTITY,
	mancc VARCHAR(10),
	madh VARCHAR(20),
	nguoilap VARCHAR(50),
	ngaylap DATETIME DEFAULT(GETDATE()),
	ghichu NVARCHAR(500),
	nguoicapnhat VARCHAR(50),
	ngaycapnhat DATETIME

	)
	GO
    
	CREATE TABLE tbl_customer_xuathang_details(
	id INT IDENTITY,
	idxuathang INT FOREIGN KEY (idxuathang) REFERENCES tbl_customer_xuathang(id),
	mavt VARCHAR(20),
	slxuat FLOAT DEFAULT(0),
	ghichu NVARCHAR(500),
	nguoilap VARCHAR(50),
	ngaylap DATETIME DEFAULT(GETDATE()),
	nguoicapnhat VARCHAR(50),
	ngaycapnhat DATETIME,
	madh VARCHAR(20)
	PRIMARY KEY (idxuathang, madh , mavt)
	)

	EXEC USP_Customer_SavePhieuxuat

	INSERT INTO dbo.tbl_customer_xuathang
	        ( mancc ,
	          madh ,
	          nguoilap ,
	          ngaylap ,
	          ghichu
	        )
	OUTPUT Inserted.* INTO #temp
	VALUES  ( '' , -- mancc - varchar(10)
	          '' , -- madh - varchar(20)
	          '' , -- nguoilap - varchar(50)
	          GETDATE() , -- ngaylap - datetime
	          N'' 
	        )

--EXEC USP_Customer_SavePhieuxuat '[{"user":"tona", "pass":"123"},{"user":"tona2", "pass": "423"}]'
		"FSOKH0110"	"FSOKH0110"	string

--	EXEC pro_get_pallet_donhang
SELECT  * FROM dbo.UFN_GetDonhangNhapkho_Conthieu('CSHW01-054-19','HC', 'NMV06190335') where mavt='FSOKH0110'
EXEC pro_get_chitiet_phieunhapmua_hoachat

SELECT madh, mavt, COUNT(donggoi) dem FROM dbo.view_donhang_hoachat 
--WHERE madh='CSHW01-054-19' AND mavt='FSOKH0110' AND donggoi='20,'
GROUP BY madh, mavt
HAVING	COUNT(donggoi)>1

SELECT * FROM dbo.view_donhang_hoachat WHERE madh='CSHW01-110-17' AND mavt='FDMKH0026'

SELECT  a.mavt ,
        a.mancc ,
        a.tenvt ,
        b.tendvt ,
        c.loai ,
        a.maecus
FROM    dbo.tbl_vt_danhmuc a
        INNER JOIN dbo.tbl_donvitinh b ON b.madvt = a.madvt
        LEFT JOIN ( SELECT  MIN(loai) AS loai ,
                            mavt
                    FROM    dbo.tbl_vt_ncc
                    WHERE   mavt = '{e.Value}'
                    GROUP BY mavt
                  ) c ON c.mavt = a.mavt
WHERE   a.mavt = '{e.Value}'



EXEC pro_get_donmuahang_hoachat

DECLARE @jdata NVARCHAR(max)='[{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0023","sldathang":4500,"loaitien":"VND","gia":990,"thanhtien":4455000,"ghichuvt":"","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x70L (màu đen)","slxuat":4500},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0025","sldathang":600,"loaitien":"VND","gia":400,"thanhtien":240000,"ghichuvt":"cập nhật giá ngày 29/11/2014","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/15 x 25L (màu đen)","slxuat":600},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0073","sldathang":1000,"loaitien":"VND","gia":895,"thanhtien":895000,"ghichuvt":"-","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x60L(màu đen)","slxuat":1000},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0078","sldathang":7000,"loaitien":"VND","gia":508,"thanhtien":3556000,"ghichuvt":"cập nhật giá ngày 29/11/2014","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x40L (màu đen)","slxuat":7000},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CKOVA0026","sldathang":3600,"loaitien":"VND","gia":1350,"thanhtien":4860000,"ghichuvt":"","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Khoá Lục giác 4 x 110x60(màu vàng)","slxuat":3600},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"COCDE0009","sldathang":1600,"loaitien":"VND","gia":300,"thanhtien":480000,"ghichuvt":"-","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Ốc cấy lục giác - 6.3 x 15L(hệ inch ren suốt, có vành)(màu đen)","slxuat":1600},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"COCVA0042","sldathang":3660,"loaitien":"VND","gia":395,"thanhtien":1445700,"ghichuvt":"","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Ốc cấy lục giác-M8x17L(ren suốt, có vành)(màu vàng)","slxuat":3660}]'

EXEC pro_get_phieuyeucau_nhapkho

EXEC dbo.USP_Customer_Delete_Phieuxuathang @jdata = '' -- varchar(max)

SELECT * FROM dbo.tbl_customer_xuathang_details

EXEC dbo.USP_Customer_Getlist_DeliveryBill @jdata = '{"username":"dinhtuyen"}' -- varchar(max)
EXEC getor


--DELETE FROM dbo.tbl_customer_xuathang_details WHERE nguoilap='dinhtuyen'

SELECT ISJSON(@jdata)
SELECT *
		 FROM 
		 OPENJSON ( @jdata )  
			WITH (
						madh VARCHAR(50)		'$.madh',
						madt VARCHAR(20)		'$.madt',
						mavt VARCHAR(20)		'$.mavt',
						sldathang float			'$.sldathang',
						loaitien VARCHAR(5)		'$.loaitien',
						gia float				'$.gia',
						thanhtien float			'$.thanhtien',
						ghichuvt NVARCHAR(1000) N'$.ghichuvt',
						ngaydathang DATE		'$.ngaydathang',
						ngaygiaohang date		'$.ngaygiaohang',
						khgiaohang NVARCHAR(200)N'$.khgiaohang',
						--ghichu NVARCHAR(4000) '$.madh',
						nguoidathang NVARCHAR(100) N'$.nguoidathang',
						hoantat bit				'$.hoantat',
						mancc VARCHAR(20)		'$.mancc',
						yeucau  nVARCHAR(1000)  N'$.yeucau',
						tenvt NVARCHAR(200)		N'$.tenvt',
						slxuat FLOAT			'$.slxuat'
			 ) 

			 SELECT * FROM tbl_chitiet WHERE mact='188267'

			 EXEC phieunhapxuat
			 SELECT * FROM dbo.tbl_loaiphieunhap
			 EXEC pro_get_chitiet_phieunhapgo_noibo

			 EXEC dbo.sp_get_from_jdata @tag = N'', -- nvarchar(1000)
			     @jdata = N'' -- nvarchar(max)

SET QUOTED_IDENTIFIER ON
SET ANSI_NULLS ON
GO
ALTER PROC [dbo].[pro_data_dinhphoi] @madh_hb VARCHAR(MAX)
AS
    DECLARE @lStart INT = 1;
    DECLARE @lEnd INT = 1;
    DECLARE @separator VARCHAR(2) = ',';
    DECLARE @madh_gop VARCHAR(100);

------------------------------------------------------------------------------------------------
    CREATE TABLE #tmp_ds_dh
        (
          madh_gop VARCHAR(100) NOT NULL
                                PRIMARY KEY ,
          maloaidh VARCHAR(10)
        );

    CREATE TABLE #tmp_sl_vao_ghepngang
        (
          madh_hb VARCHAR(100) NOT NULL ,
          mact INT NOT NULL ,
          sl_nhan_ghepngang FLOAT ,
          PRIMARY KEY ( madh_hb, mact )
        );

    WHILE @lEnd > 0
        BEGIN
            SET @lEnd = CHARINDEX(@separator, @madh_hb, @lStart);
            SET @madh_gop = ( LTRIM(RTRIM(SUBSTRING(@madh_hb, @lStart,
                                                    IIF(@lEnd > 0, @lEnd
                                                    - @lStart, 1000)))) );
            INSERT  INTO #tmp_ds_dh
                    ( madh_gop ,
                      maloaidh
                    )
                    SELECT  @madh_gop ,
                            ( SELECT TOP 1
                                        maloaidh
                              FROM      tbl_chitiet_dh
                              WHERE     madh_gop = @madh_gop
                            )
                    WHERE   NOT EXISTS ( SELECT 0
                                         FROM   #tmp_ds_dh
                                         WHERE  madh_gop = @madh_gop );
            SET @lStart = @lEnd + 1;
        END;
---------------------------------------------------------------------------------------------------------------
--cập nhật lần đầu tại những dòng chưa có maloaigc_haophi và sl_haophi_gc
    UPDATE  a
    SET     a.maloaigc_haophi = ct.maloaigc_haophi
    FROM    tbl_chitietlenhsx a
            INNER JOIN #tmp_ds_dh ON #tmp_ds_dh.madh_gop = a.madh_hb
            INNER JOIN tbl_chitiet ct ON a.mact = ct.mact
    WHERE   a.maloaigc_haophi IS NULL
            OR a.maloaigc_haophi = '-';

    UPDATE  a
    SET     a.sl_haophi_gc = CASE WHEN #tmp_ds_dh.maloaidh IN ( 'RPSP', 'TR' )
                                  THEN a.sl_haophi_gc -- không áp dụng cho đơn hàng test run & replacement
                                  ELSE CASE WHEN a.slkh * a.sl1bo
                                                 * hp.tylehaophi < hp.slhaophi_min
                                            THEN hp.slhaophi_min
                                            ELSE CASE WHEN a.slkh * a.sl1bo
                                                           * hp.tylehaophi > hp.slhaophi_max_mucthap
                                                      THEN hp.slhaophi_max_mucthap
                                                      ELSE a.slkh * a.sl1bo
                                                           * hp.tylehaophi
                                                 END
                                       END
                             END
    FROM    tbl_chitietlenhsx a
            INNER JOIN #tmp_ds_dh ON #tmp_ds_dh.madh_gop = a.madh_hb
            INNER JOIN tbl_giacong_haophi hp ON a.maloaigc_haophi = hp.maloaigc
    WHERE   a.sl_haophi_gc IS NULL
            OR a.sl_haophi_gc = 0;


----------------------------------------------------------------------------------------------------------------------------
-- tính đầu vào ghép ngang
    INSERT  INTO #tmp_sl_vao_ghepngang
            ( madh_hb ,
              mact ,
              sl_nhan_ghepngang
            )
            SELECT  madh_hb ,
                    mact ,
                    SUM(sothanh)
            FROM    tbl_dauvao_nangluc_dinhphoi
            WHERE   EXISTS ( SELECT 0
                             FROM   #tmp_ds_dh
                             WHERE  madh_gop = tbl_dauvao_nangluc_dinhphoi.madh_hb )
                    AND macummay LIKE 'GN%'
            GROUP BY madh_hb ,
                    mact;


----------------------------------------------------------------------------------------------------------------------------
    SELECT  *
    INTO    #tmp_nhapphieu_dinhphoi
    FROM    tbl_nhapphieu_dinhphoi
    WHERE   EXISTS ( SELECT 0
                     FROM   #tmp_ds_dh
                     WHERE  id_madh_hb = tbl_nhapphieu_dinhphoi.id_madh_hb );

    SELECT  *
    INTO    #tmp_nanglucsx_dinhphoi
    FROM    tbl_nanglucsx_dinhphoi
    WHERE   EXISTS ( SELECT 0
                     FROM   #tmp_ds_dh
                     WHERE  madh_gop = tbl_nanglucsx_dinhphoi.po );
------------------------------------------------------
    CREATE TABLE #temp_hangbosung
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          slbosung INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_hangbosung
            ( id_madh_hb ,
              mact ,
              slbosung
            )
            SELECT  id_madh_hb ,
                    mact ,
                    SUM(slbosung) AS slbosung
            FROM    dbo.tbl_theodoi_hangbosung a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   qa = 1
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY id_madh_hb ,
                    mact; 
-----------------------------------------------------------------------------------------------------------------------------
    CREATE TABLE #temp_hangton
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          tondinhphoi INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_hangton
            ( id_madh_hb ,
              mact ,
              tondinhphoi
            )
            SELECT  g.id_madh_hb ,
                    g.mact ,
                    SUM(g.sldexuat) AS tondinhphoi
            FROM    dbo.tbl_phieudexuat_hangton g
                    INNER JOIN ( SELECT makho
                                 FROM   dbo.tbl_kho
                                 WHERE  vitri IN ( 'DP', 'DH1', 'DH2', 'LR',
                                                   'SO', 'CG' )
                               ) h ON g.makho = h.makho
                    INNER JOIN dbo.tbl_danhmuc_lenhsx a ON a.id_thamchieu = g.id_madh_hb
            WHERE   a.madh_gop IN ( SELECT  value
                                    FROM    fn_Split(@madh_hb, ',') )
                    AND g.duyet = 1
            GROUP BY g.id_madh_hb ,
                    g.mact;
---------------------------------------------------------------
    CREATE TABLE #temp_xuat_dp
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          sl_xuat_dp INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_xuat_dp
            ( id_madh_hb ,
              mact ,
              sl_xuat_dp
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS sl_xuat_dp
            FROM    dbo.tbl_nhapphieu_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   loai = 0
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
---------------------------------------------------------------
    CREATE TABLE #temp_catngang
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          catngang INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_catngang
            ( id_madh_hb ,
              mact ,
              catngang
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS catngang
            FROM    dbo.tbl_nanglucsx_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   manhom IN ( 120, 123 )
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
---------------------------------------------------------------
    CREATE TABLE #temp_ghepdoc
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          ghepdoc INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_ghepdoc
            ( id_madh_hb ,
              mact ,
              ghepdoc
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS ghepdoc
            FROM    dbo.tbl_nanglucsx_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   manhom = 117
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
---------------------------------------------------------------
    CREATE TABLE #temp_tamnhan_dp
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          sl_tamnhan_dp INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_tamnhan_dp
            ( id_madh_hb ,
              mact ,
              sl_tamnhan_dp
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS sl_tamnhan_dp
            FROM    dbo.tbl_nhapphieu_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   loai = 7
                    AND huykho = 0
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
---------------------------------------------------------------
    CREATE TABLE #temp_ghepngang
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          ghepngang INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_ghepngang
            ( id_madh_hb ,
              mact ,
              ghepngang
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS ghepngang
            FROM    dbo.tbl_nanglucsx_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   manhom = 116
                    AND ghephoanthanh = 1
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
---------------------------------------------------------------
    CREATE TABLE #temp_slcan_ghep
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          slcan_ghep INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_slcan_ghep
            ( id_madh_hb ,
              mact ,
              slcan_ghep
            )
            SELECT  a.id_madh_hb ,
                    mact ,
                    SUM(soluong) AS slcan_ghep
            FROM    dbo.tbl_nanglucsx_dinhphoi a
                    INNER JOIN dbo.tbl_danhmuc_lenhsx b ON b.id_thamchieu = a.id_madh_hb
            WHERE   dauraphoi = 0
                    AND manhom IN ( 120, 123 )
                    AND b.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY a.id_madh_hb ,
                    mact;
--------------------------------------------------------------
    CREATE TABLE #temp_slhoiam
        (
          id_madh_hb VARCHAR(20) NOT NULL ,
          mact INT NOT NULL ,
          slhoiam INT PRIMARY KEY ( id_madh_hb, mact )
        );
    INSERT  INTO #temp_slhoiam
            ( id_madh_hb ,
              mact ,
              slhoiam
            )
            SELECT  z.id_madh_hb ,
                    z.mact ,
                    SUM(sothanh) AS slhoiam
            FROM    dbo.tbl_dauvao_nangluc_dinhphoi z
                    INNER JOIN dbo.tbl_cummay y ON z.macummay = y.macummay
                    INNER JOIN dbo.tbl_danhmuc_lenhsx a ON z.id_madh_hb = a.id_thamchieu
            WHERE   y.manhom = 142
                    AND z.xacnhanralo = 0
                    AND a.madh_gop IN ( SELECT  value
                                        FROM    fn_Split(@madh_hb, ',') )
            GROUP BY z.mact ,
                    z.id_madh_hb;
                      
---------------------------------------------------------------
    SELECT  a.id_madh_hb ,
            z.madh_gop AS madh_hb ,
           -- #tmp_ds_dh.maloaidh ,
            a.id_mamh ,
            c.mamh ,
            d.homh ,
            c.tenmh ,
            c.mamh + ' - ' + d.homh + ' ' + c.tenmh AS tenmathang ,
            a.thsx ,
            a.mact ,
            a.mact2 ,
            a.tenct ,
            b.tennl ,
            a.cao ,
            a.rong ,
            a.dai ,
            a.sl1bo ,
            a.slkh ,
            j.tenloaigc ,
            a.maloaigc_haophi ,
            a.sl_haophi_gc ,
            CASE WHEN a.sl_duphong = 1
                 THEN ( a.sl1bo * a.slkh ) + ISNULL(a.sl_haophi_gc, 0)
                 ELSE a.sl_duphong
            END AS slcan ,
            a.sl1bo * a.slkh AS slcan_dh ,
            i.tondinhphoi ,
            e.sl_xuat_dp ,
            f.sl_tamnhan_dp ,
            xx.slcan_ghep ,
            k.ghepngang ,
            m.ghepdoc ,
            l.catngang ,
            CASE WHEN a.sl_duphong = 1
                 THEN CASE WHEN a.thsx = 1
                           THEN ( CASE WHEN a.dinhphoi = 0
                                       THEN ( ( ISNULL(l.catngang, 0)
                                                + ISNULL(m.ghepdoc, 0)
                                                + ISNULL(i.tondinhphoi, 0) )
                                              - ( a.sl1bo * a.slkh ) )
                                       ELSE 0
                                  END )
                           ELSE 0
                      END
                 ELSE CASE WHEN a.thsx = 1
                           THEN ( CASE WHEN a.dinhphoi = 0
                                       THEN ( ( ISNULL(l.catngang, 0)
                                                + ISNULL(m.ghepdoc, 0)
                                                + ISNULL(i.tondinhphoi, 0) )
                                              - ( a.sl_duphong ) )
                                       ELSE 0
                                  END )
                           ELSE 0
                      END
            END AS slthieu_cat ,
            CASE WHEN a.sl_duphong = 1
                 THEN CASE WHEN a.thsx = 1
                           THEN ( ISNULL(e.sl_xuat_dp, 0)
                                  + ISNULL(i.tondinhphoi, 0) - ( a.sl1bo
                                                              * a.slkh ) )
                           ELSE 0
                      END
                 ELSE CASE WHEN a.thsx = 1
                           THEN ( ISNULL(e.sl_xuat_dp, 0)
                                  + ISNULL(i.tondinhphoi, 0)
                                  - ( a.sl_duphong ) )
                           ELSE 0
                      END
            END AS sl_thieuxuat_dp ,
            a.ghichu ,
            d.homh + ' ' + c.tenmh AS tenmathang2 ,
            z1.slbosung ,
            a.kt_dinhphoi ,
            zz.slhoiam ,
            a.dinhphoi ,
            gn.sl_nhan_ghepngang ,
            c.ct
    FROM    dbo.tbl_chitietlenhsx a --  INNER JOIN #tmp_ds_dh ON #tmp_ds_dh.madh_gop = a.madh_hb
            INNER JOIN dbo.DM_NguyenLieu b ON a.manl = b.manl
            INNER JOIN dbo.tbl_mathang c ON a.id_mamh = c.id_thamchieu
            INNER JOIN dbo.tbl_homh d ON c.mahomh = d.mahomh
            LEFT JOIN #temp_xuat_dp e ON e.id_madh_hb = a.id_madh_hb
                                         AND e.mact = a.mact
            LEFT JOIN #temp_tamnhan_dp f ON f.id_madh_hb = a.id_madh_hb
                                            AND f.mact = a.mact
            LEFT JOIN #temp_ghepngang k ON k.id_madh_hb = a.id_madh_hb
                                           AND k.mact = a.mact
            LEFT JOIN #temp_ghepdoc m ON m.id_madh_hb = a.id_madh_hb
                                         AND m.mact = a.mact
            LEFT JOIN #temp_catngang l ON l.id_madh_hb = a.id_madh_hb
                                          AND l.mact = a.mact
            LEFT JOIN #temp_hangton i ON i.id_madh_hb = a.id_madh_hb
                                         AND i.mact = a.mact
            INNER JOIN dbo.tbl_giacong j ON a.maloaigc = j.maloaigc
            LEFT JOIN #temp_slhoiam zz ON zz.id_madh_hb = a.id_madh_hb
                                          AND zz.mact = a.mact
            LEFT JOIN #temp_slcan_ghep xx ON xx.id_madh_hb = a.id_madh_hb
                                             AND xx.mact = a.mact
            LEFT JOIN #tmp_sl_vao_ghepngang gn ON a.madh_hb = gn.madh_hb
                                                  AND a.mact = gn.mact
            INNER JOIN dbo.tbl_danhmuc_lenhsx z ON z.id_thamchieu = a.id_madh_hb
            LEFT JOIN #temp_hangbosung z1 ON z1.id_madh_hb = a.id_madh_hb
                                             AND z1.mact = a.mact
    WHERE   z.madh_gop IN ( SELECT  value
                            FROM    fn_Split(@madh_hb, ',') )
            AND a.cum = 0
            AND b.maloainl = 'NLTN'
    ORDER BY a.mamh ,
            a.sx;








GO

			 