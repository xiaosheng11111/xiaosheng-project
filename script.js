// 示例：简单的保存录入和查询逻辑
document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const searchBtn = document.getElementById('searchBtn');
    const orderTableBody = document.getElementById('orderTableBody');

    // 模拟订单数据
    let orders = [];

    // 保存录入
    saveBtn.addEventListener('click', function () {
        const newOrder = {
            date: document.getElementById('orderDate').value,
            platform: document.getElementById('platformSelect').value,
            name: document.getElementById('customerName').value,
            phone: document.getElementById('customerPhone').value,
            address: document.getElementById('customerAddress').value,
            purchaseNo: document.getElementById('purchaseOrderNo').value,
            serialNo: document.getElementById('orderSerialNo').value,
            expressNo: document.getElementById('expressNo').value,
            logistics: '' // 物流公司字段，可后续扩展
        };

        if (!newOrder.name || !newOrder.expressNo) {
            alert('请填写必填信息（如客户姓名、快递单号）');
            return;
        }

        orders.push(newOrder);
        renderTable(orders);
        alert('订单已保存！');

        // 清空表单
        document.querySelectorAll('.form-input').forEach(input => {
            if (input.type !== 'date' && input.tagName !== 'SELECT') {
                input.value = '';
            }
        });
    });

    // 查询功能
    searchBtn.addEventListener('click', function () {
        const keyword = document.getElementById('searchKeyword').value.trim().toLowerCase();
        if (!keyword) {
            renderTable(orders);
            return;
        }

        const filtered = orders.filter(order => {
            return (
                order.name.toLowerCase().includes(keyword) ||
                order.phone.includes(keyword) ||
                order.address.toLowerCase().includes(keyword) ||
                order.serialNo.includes(keyword) ||
                order.purchaseNo.includes(keyword) ||
                order.expressNo.includes(keyword)
            );
        });

        renderTable(filtered);
    });

    // 渲染表格
    function renderTable(data) {
        orderTableBody.innerHTML = '';
        data.forEach((order, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${order.date}</td>
                <td>${order.serialNo}</td>
                <td>${order.name}</td>
                <td>${order.phone}</td>
                <td>${order.address}</td>
                <td>${order.expressNo}</td>
                <td>${order.logistics}</td>
                <td>${order.purchaseNo}</td>
                <td>${order.platform}</td>
                <td><button onclick="deleteOrder(${index})">删除</button></td>
            `;
            orderTableBody.appendChild(tr);
        });
    }

    // 删除订单（绑定到window，方便表格调用）
    window.deleteOrder = function (index) {
        orders.splice(index, 1);
        renderTable(orders);
    };
});
