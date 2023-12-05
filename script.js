function calculate() {
    // 獲取輸入框的值
    var inputNumber = document.getElementById("inputNumber").value;

    // 將輸入的值轉換為數字
    var number = parseFloat(inputNumber);

    // 檢查輸入是否為有效數字
    if (!isNaN(number)) {
        // 計算結果，這裡是將輸入的數字乘以2
        var result = number * 2;

        // 將結果顯示在網頁上
        document.getElementById("result").innerText = "計算結果：" + result;
    } else {
        // 如果輸入不是有效數字，顯示錯誤消息
        document.getElementById("result").innerText = "請輸入有效數字";
    }
}
