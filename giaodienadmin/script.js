document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu a");
    const mainSection = document.getElementById("main-section");
  
    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const id = item.id;
  
        if (id === "dashboard") {
          mainSection.innerHTML = `
            <h1>Dashboard</h1>
            <div class="stats-cards">
              <div class="card">
                <h2>Người dùng</h2>
                <p><i class="fas fa-user"></i> 1,245</p>
              </div>
              <div class="card">
                <h2>Doanh thu</h2>
                <p><i class="fas fa-dollar-sign"></i> $12,500</p>
              </div>
              <div class="card">
                <h2>Đơn hàng</h2>
                <p><i class="fas fa-box"></i> 320</p>
              </div>
              <div class="card">
                <h2>Lượt xem</h2>
                <p><i class="fas fa-eye"></i> 8,500</p>
              </div>
            </div>`;
        } else if (id === "products") {
          mainSection.innerHTML = `
            <h1>Sản phẩm</h1>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Danh mục</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sản phẩm A</td>
                    <td>$100</td>
                    <td>50</td>
                    <td>Danh mục 1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sản phẩm B</td>
                    <td>$200</td>
                    <td>30</td>
                    <td>Danh mục 2</td>
                  </tr>
                </tbody>
              </table>
            </div>`;
        } else if (id === "orders") {
          mainSection.innerHTML = `
            <h1>Đơn hàng</h1>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Khách hàng</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td>$500</td>
                    <td>Đã giao</td>
                    <td>2024-11-15</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Trần Thị B</td>
                    <td>$300</td>
                    <td>Đang xử lý</td>
                    <td>2024-11-14</td>
                  </tr>
                </tbody>
              </table>
            </div>`;
        } else if (id === "comments") {
          mainSection.innerHTML = `
            <h1>Bình luận</h1>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Người dùng</th>
                    <th>Nội dung</th>
                    <th>Ngày</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nguyễn Văn C</td>
                    <td>Sản phẩm rất tốt!</td>
                    <td>2024-11-15</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Trần Thị D</td>
                    <td>Dịch vụ cần cải thiện.</td>
                    <td>2024-11-14</td>
                  </tr>
                </tbody>
              </table>
            </div>`;
        } else if (id === "categories") {
          mainSection.innerHTML = `
            <h1>Danh mục</h1>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên danh mục</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Điện thoại</td>
                    <td>Các loại điện thoại di động.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Máy tính</td>
                    <td>Các loại laptop và PC.</td>
                  </tr>
                </tbody>
              </table>
            </div>`;
        }
        
      });
    });
  });
  