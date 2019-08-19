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

DECLARE @jdata NVARCHAR(max)='[{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0023","sldathang":4500,"loaitien":"VND","gia":990,"thanhtien":4455000,"ghichuvt":"","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x70L (màu đen)","slxuat":4500},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0025","sldathang":600,"loaitien":"VND","gia":400,"thanhtien":240000,"ghichuvt":"cập nhật giá ngày 29/11/2014","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/15 x 25L (màu đen)","slxuat":600},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0073","sldathang":1000,"loaitien":"VND","gia":895,"thanhtien":895000,"ghichuvt":"-","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x60L(màu đen)","slxuat":1000},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CBODE0078","sldathang":7000,"loaitien":"VND","gia":508,"thanhtien":3556000,"ghichuvt":"cập nhật giá ngày 29/11/2014","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n- Sản phẩm đúng quy cách, chất lượng, bền đẹp.\r\n- Đảm bảo tiêu chuẩn test muối 24h theo tiêu chuẩn Mỹ. \r\n- Giao hàng đúng thời gian yêu cầu.\r\n- Ký xác nhận và fax lại đơn hàng","tenvt":"Bulon lục giác M8/DK15x40L (màu đen)","slxuat":7000},{"madh":"CLID01-053-19","madt":"CLID01","mavt":"CKOVA0026","sldathang":3600,"loaitien":"VND","gia":1350,"thanhtien":4860000,"ghichuvt":"","ngaydathang":"2019-06-11","ngaygiaohang":"2019-07-15","khgiaohang":"15/07/2019","nguoidathang":"DƯƠNG NGỌC NHƯ QUỲNH","hoantat":0,"mancc":"CLID01","yeucau":"+ NƠI GIAO HÀNG: CÔNG TY TNHH HÒA BÌNH\r\n+ Phương thức thanh toán: Kết sổ đối chiếu ngày 25 hàng tháng, thanh toán ngày 25 tháng sau.\r\n\r\n* Yêu cầu:\r\n-