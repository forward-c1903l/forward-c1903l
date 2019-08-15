/* 
	Mục tiêu: 
	- Carousel__item sẽ có 4 màu. Nhưng chỉ xuất hiện mỗi lần 1 màu.
	- Khi Click Vào Icon Trái Phải thì sẽ đổi màu Carousel__item theo thứ tự 
	VD: Thứ tự các màu là 1 2 3 4. Giả sử đang hiển thị màu 2.
		Khi Click Trái thì sẽ đổi thành màu 1.
		Khi Click Phải thì sẽ đổi thành màu 3.
	- Đồng thời khi Click vào icon Trái Phải thì cũng sẽ đổi thẻ h1 theo thứ tự giống như màu sắc.
*/

/* 
	Ở đây mình sẽ làm hơi dài 1 tí nhưng cách này sẽ dễ hiểu nhất.
*/
/* 
	Thực Hiện:
	- Số 1: Click vào nút thì chắc chắn phải lấy được element nút để bắt sự kiện click
	Lấy element nút bằng DOM thông qua ID thẻ span ( tìm hiểu tài liệu getElementById DOM )
	
	- Số 2: Muốn thay đổi màu sắc của Carousel__item thì phải lấy được element Carousel__item
	Lấy element Carousel__item bằng DOM thông qua class. ( tìm hiểu tài liệu querySelector DOM )

	- Số 3: Muốn thay đổi thẻ h1 thì cung phải lấy được element thẻ h1
	Lấy element h1 bằng DOM thông qua class. ( tìm hiểu tài liệu querySelectorAll DOM )

	- Số 4: Sau khi có element nút. Bắt sự kiện click ( tìm hiểu tài liệu onClick Javascript )

	- Số 5: onClick thì nó sẽ gọi 1 hàm. Vậy phải có hàm thực hiện hành động.
	Lưu ý: 2 Nút nên sẽ có 2 hàm và thực hiện hành động giống y chang nhau nhưng chỉ khác cách thay đổi thành phần

	+++ KHÔNG HIỂU THÌ CỨ LÀM NHỮNG CÁI DỄ TRƯỚC RỒI CÓ GÌ HỌP NHÓM VÀO CHỦ NHẬT ĐỂ TÌM CÁCH GIẢI QUYẾT.

	Sẽ làm Nút Bên Trái Trước.

	Tạo Function trong đó: 
	function {
		Để nhanh hơn chung ta sẽ set mặc định là black và thẻ h1 đầu tiên.( Để dùng chung biến vị trí hiện tại sau này )
		1. Thực hiện với Màu Sắc Carousel__item
			- Đầu Tiên tạo ra mảng màu sắc gồm 4 phần tử. VD: let backGround = ['black', 'blue', 'green', 'yellow']
			- Kiểm Tra element Carousel__item đang là màu gì. ( tìm hiểu tài liệu HTML DOM style Property ) 
			- Lấy được màu này rồi kiểm dùng vòng lặp lặp qua mảng backGround
			- Lấy vị trí ban đầu của màu đó trong mảng.
			- Vì Click Bên Trái nên vị trí sau khi click sẽ bằng vị trí ban đầu - 1
			- Tạo 1 biến lưu vị trí hiện tại = vị trí ban đầu - 1.
			Lưu ý: Nếu vị trí ban đầu = 0 thì phải vị trí hiện tại = 4 ( vì nếu biến hiện tại = -1 thì sẽ bị lỗi )
			- Rồi sau đó đặt Background của Carousel__item theo vị trí hiện tại.
			VD: Carousel__item.style.backGround = backGround[vị trí hiện tại]
		- Kết Thúc của Màu Sắc

		2. Thực hiện với thẻ h1
			- Vì thẻ h1 có nhiều cái nên khi lấy element thì element này sẽ là 1 MẢNG gồm tất cả các h1
			VD: let allH1 = [h1, h1, h1, h1]
			- Add class visible cho thẻ h1 tương ứng theo vị trí hiện tại đã có sẵn ở Carousel__item
			VD: h1[vị trí hiện tại].classList.add('visible')

	}

	Kết Thúc. 
*/