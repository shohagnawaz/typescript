// getter setter

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number

    constructor (userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }

    // balance k set kortese
    // addBalance (balance: number) {
    //     this.userBalance = this.userBalance + balance
    // }

    // want to use setter
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    } 

    // get korbo
    // getBalance () {
    //     return this.userBalance;
    // }

    // getter use kore get korte chai
    get getBalance () {
        return this.userBalance;
    }
}

const nawazAccount = new BankAccount(147, "Md. Shah Nawaz", 67000);

// nawazAccount.addBalance(13000);
// nawazAccount.addBalance(20000);
// console.log(nawazAccount.getBalance());

nawazAccount.addBalance = 100;
// console.log(nawazAccount)
console.log(nawazAccount.getBalance);