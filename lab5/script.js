class Account{
    static accountList = [];


    #accountName;
    #deposit;

    setInfo(accountName, deposit){
        this.#accountName = accountName;
        this.#deposit = deposit;
        Account.accountList.push(this)

    } 
    getInfo(){
        return this.#accountName + "  " + this.#deposit;
    }
}
function createAccount() {
    const accountName = document.getElementById("accountName").value;
    const deposit = document.getElementById("deposit").value;
    const account = new Account();
    
    account.setInfo(accountName,deposit);
    let list  = "";
    Account.accountList.forEach(element => {
        list+=element.getInfo();
        list+="\n";
    });
    console.log(list);
    document.getElementById("accountDisplay").innerHTML =list;
}

document.getElementById("createAccount").onclick = createAccount;