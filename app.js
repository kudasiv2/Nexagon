class NexagonApp {
    constructor() {
        this.web3 = null;
        this.contract = null;
        this.account = null;
        this.contractAddress = '0x2F0bc7C3802668dF72DFBC8730C96C0187A9fceF'; // Replace with deployed contract address
        this.contractABI = [[{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"planId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonusAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralExpiredWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawROI","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawReferral","type":"event"},{"inputs":[],"name":"CLAIM_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReferralExpired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_investmentIndex","type":"uint256"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNextWithdrawTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_planId","type":"uint256"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"minDeposit","type":"uint256"},{"internalType":"uint256","name":"maxDeposit","type":"uint256"},{"internalType":"uint256","name":"dailyROI","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"totalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformStats","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"totalInvestors_","type":"uint256"},{"internalType":"uint256","name":"totalInvested_","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn_","type":"uint256"},{"internalType":"uint256","name":"totalReferralBonus_","type":"uint256"},{"internalType":"uint256","name":"referralExpiredBalance_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralRates","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralRequirements","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPaidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"activeInvestments","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"referralBonusWithdrawn","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256[15]","name":"referralLevels","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInvestments","outputs":[{"internalType":"uint256[]","name":"planIds","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startTimes","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimTimes","type":"uint256[]"},{"internalType":"uint256[]","name":"totalClaimeds","type":"uint256[]"},{"internalType":"bool[]","name":"actives","type":"bool[]"},{"internalType":"uint256[]","name":"pendingRewards","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasActiveDeposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_planId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"plans","outputs":[{"internalType":"uint256","name":"minDeposit","type":"uint256"},{"internalType":"uint256","name":"maxDeposit","type":"uint256"},{"internalType":"uint256","name":"dailyROI","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"totalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralExpiredBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRequirements","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"referralBonusWithdrawn","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawROI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReferral","outputs":[],"stateMutability":"nonpayable","type":"function"}]]; // Replace with your contract ABI
        
        this.init();
    }

    async init() {
        await this.loadContractABI();
        await this.checkWeb3();
        this.bindEvents();
        await this.loadPlatformStats();
        await this.loadPlans();
        await this.loadReferralLevels();
    }

    async loadContractABI() {
        // You'll need to replace this with your actual contract ABI
        // For now, using a placeholder - you should copy the full ABI from Remix
        this.contractABI = [
            {
                "inputs": [],
                "name": "getContractBalance",
                "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
                "stateMutability": "view",
                "type": "function"
            },
            // Add all your contract functions here...
        ];
    }

    async checkWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            this.web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                this.account = accounts[0];
                this.updateUI();
            } catch (error) {
                console.error('User denied account access');
            }
        } else {
            alert('Please install MetaMask to use this dApp!');
        }
    }

    bindEvents() {
        // Connect Wallet Button
        document.getElementById('connectWallet').addEventListener('click', () => {
            this.connectWallet();
        });

        // Withdraw Buttons
        document.getElementById('withdrawROI').addEventListener('click', () => {
            this.withdrawROI();
        });

        document.getElementById('withdrawReferral').addEventListener('click', () => {
            this.withdrawReferral();
        });

        // Modal Events
        document.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('confirmInvest').addEventListener('click', () => {
            this.confirmInvestment();
        });

        // Window click to close modal
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('investmentModal');
            if (e.target === modal) {
                this.closeModal();
            }
        });
    }

    async connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ 
                    method: 'eth_requestAccounts' 
                });
                this.account = accounts[0];
                this.updateUI();
                
                // Update button text
                const connectBtn = document.getElementById('connectWallet');
                connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${this.account.substring(0, 6)}...${this.account.substring(38)}`;
                
            } catch (error) {
                console.error('User denied account access');
            }
        } else {
            alert('Please install MetaMask!');
        }
    }

    async loadPlatformStats() {
        if (!this.contract) return;

        try {
            const totalUsers = await this.contract.methods.getTotalUser().call();
            const totalInvested = await this.contract.methods.getTotalInvest().call();
            const totalPaid = await this.contract.methods.getTotalPaidOut().call();
            const contractBalance = await this.contract.methods.getContractBalance().call();

            document.getElementById('totalUsers').textContent = this.formatNumber(totalUsers);
            document.getElementById('totalInvested').textContent = this.formatUSDT(totalInvested);
            document.getElementById('totalPaid').textContent = this.formatUSDT(totalPaid);
        } catch (error) {
            console.error('Error loading platform stats:', error);
        }
    }

    async loadPlans() {
        const plansGrid = document.getElementById('plansGrid');
        const plans = [
            {
                id: 0,
                name: 'Gold Plan',
                roi: '16%',
                daily: '16% Daily',
                duration: '7 Days',
                total: '112% Total',
                min: '10 USDT',
                max: '100 USDT',
                features: ['16% Daily ROI', '7 Days Duration', '112% Total Return', 'Min: 10 USDT', 'Max: 100 USDT']
            },
            {
                id: 1,
                name: 'Platinum Plan',
                roi: '9%',
                daily: '9% Daily',
                duration: '14 Days',
                total: '126% Total',
                min: '50 USDT',
                max: '100 USDT',
                features: ['9% Daily ROI', '14 Days Duration', '126% Total Return', 'Min: 50 USDT', 'Max: 100 USDT']
            },
            {
                id: 2,
                name: 'Diamond Plan',
                roi: '5%',
                daily: '5% Daily',
                duration: '30 Days',
                total: '150% Total',
                min: '100 USDT',
                max: 'No Limit',
                features: ['5% Daily ROI', '30 Days Duration', '150% Total Return', 'Min: 100 USDT', 'No Max Limit']
            }
        ];

        plansGrid.innerHTML = plans.map(plan => `
            <div class="plan-card ${plan.id === 1 ? 'featured' : ''}">
                <div class="plan-icon">
                    <i class="fas ${plan.id === 0 ? 'fa-crown' : plan.id === 1 ? 'fa-gem' : 'fa-diamond'}"></i>
                </div>
                <h3 class="plan-name">${plan.name}</h3>
                <div class="plan-roi">${plan.roi}</div>
                <div class="plan-duration">${plan.daily} • ${plan.duration}</div>
                <ul class="plan-features">
                    ${plan.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
                <button class="invest-btn" onclick="app.openInvestmentModal(${plan.id})">
                    Invest Now
                </button>
            </div>
        `).join('');
    }

    async loadReferralLevels() {
        const levelsGrid = document.getElementById('levelsGrid');
        const levels = [
            { level: 1, rate: '15%', req: '$10' },
            { level: 2, rate: '10%', req: '$50' },
            { level: 3, rate: '5%', req: '$100' },
            { level: 4, rate: '5%', req: '$150' },
            { level: 5, rate: '3%', req: '$200' },
            { level: 6, rate: '3%', req: '$250' },
            { level: 7, rate: '3%', req: '$300' },
            { level: 8, rate: '2%', req: '$350' },
            { level: 9, rate: '2%', req: '$400' },
            { level: 10, rate: '2%', req: '$450' },
            { level: 11, rate: '1%', req: '$500' },
            { level: 12, rate: '1%', req: '$550' },
            { level: 13, rate: '1%', req: '$600' },
            { level: 14, rate: '1%', req: '$650' },
            { level: 15, rate: '1%', req: '$700' }
        ];

        levelsGrid.innerHTML = levels.map(level => `
            <div class="level-item">
                <div class="level-number">${level.level}</div>
                <div class="level-rate">${level.rate}</div>
                <div class="level-req">Min: ${level.req}</div>
            </div>
        `).join('');
    }

    openInvestmentModal(planId) {
        if (!this.account) {
            alert('Please connect your wallet first!');
            return;
        }

        const plans = {
            0: { name: 'Gold Plan', min: '10', max: '100' },
            1: { name: 'Platinum Plan', min: '50', max: '100' },
            2: { name: 'Diamond Plan', min: '100', max: 'No Limit' }
        };

        const plan = plans[planId];
        document.getElementById('modalPlanName').textContent = plan.name;
        document.getElementById('modalPlanDetails').innerHTML = `
            <p><strong>Minimum Deposit:</strong> ${plan.min} USDT</p>
            <p><strong>Maximum Deposit:</strong> ${plan.max} USDT</p>
            <p><strong>Note:</strong> 10% platform fee will be deducted from TVL</p>
        `;

        document.getElementById('investmentAmount').value = plan.min;
        document.getElementById('investmentModal').style.display = 'block';
        this.currentPlanId = planId;
    }

    closeModal() {
        document.getElementById('investmentModal').style.display = 'none';
    }

    async confirmInvestment() {
        const amount = document.getElementById('investmentAmount').value;
        const referrer = document.getElementById('referrerAddress').value || '0x0000000000000000000000000000000000000000';

        if (!amount || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        try {
            // Convert to wei (assuming USDT has 18 decimals)
            const amountWei = this.web3.utils.toWei(amount.toString(), 'ether');
            
            // Call contract invest function
            await this.contract.methods.invest(
                this.currentPlanId,
                amountWei,
                referrer
            ).send({ from: this.account });

            alert('Investment successful!');
            this.closeModal();
            await this.loadUserData();
            await this.loadPlatformStats();
        } catch (error) {
            console.error('Investment failed:', error);
            alert('Investment failed: ' + error.message);
        }
    }

    async withdrawROI() {
        if (!this.account) {
            alert('Please connect your wallet first!');
            return;
        }

        try {
            await this.contract.methods.withdrawROI().send({ from: this.account });
            alert('ROI withdrawn successfully!');
            await this.loadUserData();
            await this.loadPlatformStats();
        } catch (error) {
            console.error('Withdraw failed:', error);
            alert('Withdraw failed: ' + error.message);
        }
    }

    async withdrawReferral() {
        if (!this.account) {
            alert('Please connect your wallet first!');
            return;
        }

        try {
            await this.contract.methods.withdrawReferral().send({ from: this.account });
            alert('Referral bonus withdrawn successfully!');
            await this.loadUserData();
            await this.loadPlatformStats();
        } catch (error) {
            console.error('Withdraw failed:', error);
            alert('Withdraw failed: ' + error.message);
        }
    }

    async loadUserData() {
        if (!this.account || !this.contract) return;

        try {
            const userInfo = await this.contract.methods.getUserInfo(this.account).call();
            const pendingRewards = await this.contract.methods.getPendingRewards(this.account).call();
            const nextWithdrawTime = await this.contract.methods.getNextWithdrawTime(this.account).call();

            document.getElementById('userTotalInvested').textContent = this.formatUSDT(userInfo.totalInvested);
            document.getElementById('userTotalWithdrawn').textContent = this.formatUSDT(userInfo.totalWithdrawn);
            document.getElementById('userReferralBonus').textContent = this.formatUSDT(userInfo.referralBonus);
            document.getElementById('userPendingRewards').textContent = this.formatUSDT(pendingRewards);

            // Update next withdraw time
            if (nextWithdrawTime > 0) {
                const time = new Date(nextWithdrawTime * 1000);
                document.getElementById('nextWithdrawTime').textContent = time.toLocaleTimeString();
            } else {
                document.getElementById('nextWithdrawTime').textContent = 'Now';
            }

            // Load investments
            await this.loadUserInvestments();
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }

    async loadUserInvestments() {
        if (!this.account || !this.contract) return;

        try {
            const investments = await this.contract.methods.getUserInvestments(this.account).call();
            const investmentsList = document.getElementById('investmentsList');
            
            if (investments.planIds.length === 0) {
                investmentsList.innerHTML = '<p class="no-investments">No active investments found.</p>';
                return;
            }

            investmentsList.innerHTML = investments.planIds.map((planId, index) => {
                const planNames = ['Gold', 'Platinum', 'Diamond'];
                const amount = this.formatUSDT(investments.amounts[index]);
                const startTime = new Date(investments.startTimes[index] * 1000).toLocaleDateString();
                const pending = this.formatUSDT(investments.pendingRewards[index]);
                
                return `
                    <div class="investment-item">
                        <div class="investment-info">
                            <h4>${planNames[planId]} Plan</h4>
                            <p>Started: ${startTime} • Pending: ${pending}</p>
                        </div>
                        <div class="investment-amount">${amount}</div>
                    </div>
                `;
            }).join('');
        } catch (error) {
            console.error('Error loading investments:', error);
        }
    }

    updateUI() {
        if (this.account) {
            document.getElementById('dashboardSection').style.display = 'block';
            this.loadUserData();
            
            // Update connect button
            const connectBtn = document.getElementById('connectWallet');
            connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${this.account.substring(0, 6)}...${this.account.substring(38)}`;
        }
    }

    formatUSDT(amount) {
        return (amount / 1e18).toFixed(2) + ' USDT';
    }

    formatNumber(num) {
        return parseInt(num).toLocaleString();
    }
}

// Initialize the app when the page loads
let app;
window.addEventListener('load', () => {
    app = new NexagonApp();
});
