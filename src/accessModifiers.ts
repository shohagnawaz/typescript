// access >> modify

class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number

    constructor (userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }

    addBalance (balance: number) {
        this.userBalance = this.userBalance + balance
    }
}

const nawazAccount = new BankAccount(147, "Md. Shah Nawaz", 67000);
nawazAccount.addBalance(13000);
nawazAccount.addBalance(20000);
console.log(nawazAccount);