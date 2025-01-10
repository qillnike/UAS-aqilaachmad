
function validateTransactionForm(event) {
    const transactionName = document.getElementById("transactionName");
    const transactionAmount = document.getElementById("transactionAmount");
    const transactionCategory = document.getElementById("transactionCategory");
    let valid = true; 
    let errorMessage = ""; 
  
    if (transactionName.value.trim() === "") {
        errorMessage += "Silahkan isi nama kategori anda.\n";
        valid = false;
    }

    if (
        transactionAmount.value.trim() === "" ||
        isNaN(transactionAmount.value) ||
        transactionAmount.value <= 0
    ) {
        errorMessage += "Tolong isi jumlah transaksi anda.\n";
        valid = false;
    }

    if (transactionCategory.value === "") {
        errorMessage += "Silakan pilih kategori transaksi.\n";
        valid = false;
    }

    if (!valid) {
        alert(errorMessage);
        event.preventDefault(); 
    }

    return valid; 
}

function resetForm() {
    document.getElementById("transactionForm").reset();
}

document.getElementById("transactionForm").addEventListener("submit", (event) => {
    if (validateTransactionForm(event)) {
        if (confirm("Form berhasil disimpan. Ingin reset form?")) {
            resetForm();
        }
    } else {
        event.preventDefault(); 
    }
});
