// Updated contract address and ABI
const CONTRACT_ADDRESS = '0x86f6A9d479590A5fB1908811e34f98Ec5D9d97bb';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const READ_ONLY_RPC = 'https://bsc-dataseed1.binance.org/';

const USDT_ABI = [
    {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "type": "function"}
];

const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"leader","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LeadershipBonusAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"planId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonusAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralExpiredWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"processedAmount","type":"uint256"}],"name":"SystemMetricsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawLeadership","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawROI","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawReferral","type":"event"},{"inputs":[],"name":"CLAIM_COOLDOWN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReferralExpired","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_investmentIndex","type":"uint256"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getDirectReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeadershipRates","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeadershipRequirements","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNextWithdrawTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_planId","type":"uint256"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"minDeposit","type":"uint256"},{"internalType":"uint256","name":"maxDeposit","type":"uint256"},{"internalType":"uint256","name":"dailyROI","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"totalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPlatformStats","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"totalInvestors_","type":"uint256"},{"internalType":"uint256","name":"totalInvested_","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn_","type":"uint256"},{"internalType":"uint256","name":"totalReferralBonus_","type":"uint256"},{"internalType":"uint256","name":"totalLeadershipBonus_","type":"uint256"},{"internalType":"uint256","name":"referralExpiredBalance_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralRates","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralRequirements","outputs":[{"internalType":"uint256[15]","name":"","type":"uint256[15]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getReferralsCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTeamMembers","outputs":[{"internalType":"address[]","name":"teamAddresses","type":"address[]"},{"internalType":"uint256[]","name":"investmentAmounts","type":"uint256[]"},{"internalType":"uint256[]","name":"activeStatus","type":"uint256[]"},{"internalType":"uint256","name":"totalTeamMembers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTeamMembersByLevel","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTeamMembersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalInvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPaidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalTeamSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"activeInvestments","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"referralBonusWithdrawn","type":"uint256"},{"internalType":"uint256","name":"leadershipBonus","type":"uint256"},{"internalType":"uint256","name":"leadershipBonusWithdrawn","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256[15]","name":"referralLevels","type":"uint256[15]"},{"internalType":"uint256[3]","name":"leadershipLevels","type":"uint256[3]"},{"internalType":"uint256","name":"directReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserInvestments","outputs":[{"internalType":"uint256[]","name":"planIds","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startTimes","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimTimes","type":"uint256[]"},{"internalType":"uint256[]","name":"totalClaimeds","type":"uint256[]"},{"internalType":"bool[]","name":"actives","type":"bool[]"},{"internalType":"uint256[]","name":"pendingRewards","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasActiveDeposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_planId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"leadershipRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"leadershipRequirements","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"plans","outputs":[{"internalType":"uint256","name":"minDeposit","type":"uint256"},{"internalType":"uint256","name":"maxDeposit","type":"uint256"},{"internalType":"uint256","name":"dailyROI","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"totalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"referralExpiredBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralRequirements","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLeadershipBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userLevels","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalInvested","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"referralBonus","type":"uint256"},{"internalType":"uint256","name":"referralBonusWithdrawn","type":"uint256"},{"internalType":"uint256","name":"leadershipBonus","type":"uint256"},{"internalType":"uint256","name":"leadershipBonusWithdrawn","type":"uint256"},{"internalType":"bool","name":"registered","type":"bool"},{"internalType":"uint256","name":"directReferrals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawLeadership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawROI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawReferral","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let web3;
let contract;
let usdtContract;
let userAccount;
let selectedPlan = null;
let referralAddress = null;
let withdrawTimerInterval = null;

const preloader = document.querySelector('.preloader');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const connectWalletBtn = document.getElementById('connectWallet');
const notification = document.getElementById('notification');
const investmentSuccessPopup = document.getElementById('investmentSuccessPopup');

const sections = {
    home: document.getElementById('home'),
    dashboard: document.getElementById('dashboard'),
    invest: document.getElementById('invest'),
    referral: document.getElementById('referral'),
    leadership: document.getElementById('leadership'),
    faq: document.getElementById('faq')
};

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    generateInvestmentPlans();
    checkPreloader();
    checkURLForReferral();
    setupFAQ();
    generateReferralLevelsCompact(); 
    generateLeadershipLevelsCompact(); 
});

function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function checkURLForReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const refAddress = urlParams.get('ref');
    if (refAddress && Web3.utils.isAddress(refAddress)) {
        referralAddress = refAddress;
        document.getElementById('referrerAddress').value = refAddress;
        showNotification('Referral address detected!', 'success');
    }
}

async function initializeApp() {
    try {
        web3 = new Web3(new Web3.providers.HttpProvider(READ_ONLY_RPC));
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        await loadGlobalStats();
    } catch (error) {
        console.error('Error init:', error);
    }
    if (typeof window.ethereum !== 'undefined') {
         try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) await connectWallet();
         } catch (err) {}
    }
}

async function loadGlobalStats() {
    if (!contract) return;
    try {
        const stats = await contract.methods.getPlatformStats().call();
        const formatUSDT = (weiValue) => parseFloat(web3.utils.fromWei(weiValue, 'ether')).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        
        document.getElementById('statTvl').textContent = `${formatUSDT(stats.contractBalance)} USDT`;
        document.getElementById('statTotalUsers').textContent = parseInt(stats.totalInvestors_).toLocaleString('en-US');
        document.getElementById('statTotalDeposit').textContent = `${formatUSDT(stats.totalInvested_)} USDT`;
        document.getElementById('statTotalPaidOut').textContent = `${formatUSDT(stats.totalWithdrawn_)} USDT`;
    } catch (error) {
        console.error('Error stats:', error);
    }
}

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') return showNotification('Please install MetaMask or Trust Wallet!', 'error');
    try {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x38') {
             try {
                await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x38' }] });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({ 
                        method: 'wallet_addEthereumChain', 
                        params: [{ chainId: '0x38', chainName: 'Binance Smart Chain', nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 }, rpcUrls: ['https://bsc-dataseed.binance.org/'], blockExplorerUrls: ['https://bscscan.com/'] }] 
                    });
                } else throw switchError;
            }
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            userAccount = accounts[0];
            updateWalletUI();
            loadUserData();
            showNotification('Wallet connected!', 'success');
        }
    } catch (error) {
        showNotification('Connection failed', 'error');
    }
}

function setupEventListeners() {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) navMenu.classList.remove('active');
    });
    document.querySelectorAll('.nav__link, button[data-section]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = e.target.closest('[data-section]');
            if (targetElement) {
                showSection(targetElement.getAttribute('data-section'));
                navMenu.classList.remove('active');
            }
        });
    });
    connectWalletBtn.addEventListener('click', connectWallet);
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    document.getElementById('newInvestment').addEventListener('click', () => {
        investmentSuccessPopup.classList.remove('active');
        showPlans();
    });
    document.getElementById('investmentAmount').addEventListener('input', updateInvestmentSummary);
    investmentSuccessPopup.addEventListener('click', (e) => { if (e.target === investmentSuccessPopup) investmentSuccessPopup.classList.remove('active'); });
    document.getElementById('withdrawROI').addEventListener('click', withdrawROI);
    document.getElementById('withdrawReferral').addEventListener('click', withdrawReferral);
    document.getElementById('withdrawLeadership').addEventListener('click', withdrawLeadership);
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            userAccount = accounts.length > 0 ? accounts[0] : null;
            updateWalletUI();
            if(userAccount) loadUserData();
            else {
                showWalletAlerts();
                generateReferralLevelsCompact();
                generateLeadershipLevelsCompact();
            }
        });
        window.ethereum.on('chainChanged', () => window.location.reload());
    }
}

function showSection(sectionName) {
    Object.values(sections).forEach(section => { if (section) section.style.display = 'none'; });
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
    if (sections[sectionName]) {
         sections[sectionName].style.display = 'flex';
         if(sectionName !== 'home') sections[sectionName].style.flexDirection = 'column';
        window.scrollTo(0, 0);
        const navLink = document.querySelector(`.nav__link[data-section="${sectionName}"]`);
        if (navLink) navLink.classList.add('active');
        if (sectionName === 'dashboard' && userAccount) startWithdrawTimer();
        else stopWithdrawTimer();
    }
}

function updateWalletUI() {
    if (userAccount) {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}`;
        hideWalletAlerts();
    } else {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> Connect Wallet`;
        showWalletAlerts();
    }
}

function showWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert'].forEach(id => document.getElementById(id).style.display = 'flex');
    ['quickStats', 'actionButtons', 'noInvestmentsMessage', 'referralStats', 'referralLinkSection', 'referralActionButtons', 'leadershipStats', 'leadershipActionButtons', 'investmentHistorySection'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function hideWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert'].forEach(id => document.getElementById(id).style.display = 'none');
     ['quickStats', 'referralStats', 'leadershipStats'].forEach(id => {
         const el = document.getElementById(id);
        if (el) el.style.display = 'grid';
    });
    document.getElementById('actionButtons').style.display = 'flex';
    document.getElementById('referralActionButtons').style.display = 'flex';
    document.getElementById('leadershipActionButtons').style.display = 'flex';
    document.getElementById('referralLinkSection').style.display = 'block';
}

async function loadUserData() {
    if (!contract || !userAccount) return;
    try {
        const userInfo = await contract.methods.getUserInfo(userAccount).call();
        const pendingRewards = await contract.methods.getPendingRewards(userAccount).call();
        const teamCount = await contract.methods.getTeamMembersCount(userAccount).call();
        const formatUSDT = (weiValue) => parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        
        document.getElementById('totalInvested').textContent = `${formatUSDT(userInfo.totalInvested)} USDT`;
        document.getElementById('pendingRewards').textContent = `${formatUSDT(pendingRewards)} USDT`;
        document.getElementById('referralBonusAmount').textContent = `${formatUSDT(userInfo.referralBonus)} USDT`;
        document.getElementById('leadershipBonusStats').textContent = `${formatUSDT(userInfo.leadershipBonus)} USDT`;
        document.getElementById('referralTeamCount').textContent = teamCount;
        document.getElementById('leadershipTeamCount').textContent = teamCount;
        
        let userLevel = 0;
        const referralRequirements = await contract.methods.getReferralRequirements().call();
        for (let i = 0; i < referralRequirements.length; i++) {
            if (new BigNumber(userInfo.totalInvested).isGreaterThanOrEqualTo(new BigNumber(referralRequirements[i]))) userLevel = i + 1;
            else break;
        }
        document.getElementById('referralLevel').textContent = userLevel;
        
        let leadershipLevel = 0;
        const leadershipRequirements = await contract.methods.getLeadershipRequirements().call();
        for (let i = 0; i < leadershipRequirements.length; i++) {
            if (parseInt(teamCount) >= parseInt(leadershipRequirements[i])) leadershipLevel = i + 1;
            else break;
        }
        document.getElementById('currentLeadershipLevel').textContent = leadershipLevel;

        const investments = await contract.methods.getUserInvestments(userAccount).call();
        document.getElementById('noInvestmentsMessage').style.display = investments.planIds.length === 0 ? 'block' : 'none';
        
        // Show investment history section if user has investments
        if (investments.planIds.length > 0) {
            document.getElementById('investmentHistorySection').style.display = 'block';
            await loadInvestmentHistory(investments);
        } else {
            document.getElementById('investmentHistorySection').style.display = 'none';
        }

        generateReferralLink();
        document.getElementById('referralLinkSection').style.display = 'block';
        
        // Load referral counts for each level
        await loadReferralLevelsWithCounts();
        
        generateLeadershipLevelsCompact(teamCount);
        startWithdrawTimer();

    } catch (error) { console.error('Error loading user data', error); }
}

async function loadInvestmentHistory(investments) {
    const investmentHistoryList = document.getElementById('investmentHistoryList');
    const investmentCount = document.getElementById('investmentCount');
    
    if (!investmentHistoryList) return;
    
    investmentCount.textContent = investments.planIds.length;
    
    // Clear existing content
    investmentHistoryList.innerHTML = '';
    
    // Get plan names
    const planNames = ['Gold Plan', 'Platinum Plan', 'Diamond Plan'];
    
    // Format USDT function
    const formatUSDT = (weiValue) => parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
    
    // Generate investment history items
    for (let i = 0; i < investments.planIds.length; i++) {
        const planId = investments.planIds[i];
        const amount = investments.amounts[i];
        const startTime = investments.startTimes[i];
        const lastClaimTime = investments.lastClaimTimes[i];
        const totalClaimed = investments.totalClaimeds[i];
        const isActive = investments.actives[i];
        const pendingReward = investments.pendingRewards[i];
        
        // Calculate duration and end time
        const planInfo = await contract.methods.getPlanInfo(planId).call();
        const duration = parseInt(planInfo.duration);
        const endTime = parseInt(startTime) + (duration * 24 * 60 * 60); // Convert days to seconds
        const currentTime = Math.floor(Date.now() / 1000);
        
        // Determine status
        let status = 'Active';
        let statusClass = 'status-active';
        
        if (!isActive) {
            status = 'Completed';
            statusClass = 'status-completed';
        } else if (currentTime > endTime) {
            status = 'Pending Completion';
            statusClass = 'status-pending';
        }
        
        // Create investment history item
        const investmentItem = document.createElement('div');
        investmentItem.className = 'investment-history-item';
        investmentItem.innerHTML = `
            <div class="investment-plan">${planNames[planId] || `Plan ${planId}`}</div>
            <div class="investment-detail">
                <span class="detail-label">Plan:</span>
                <span class="detail-value">${planNames[planId] || `Plan ${planId}`}</span>
            </div>
            <div class="investment-detail">
                <span class="detail-label">Started:</span>
                <span class="detail-value">${new Date(parseInt(startTime) * 1000).toLocaleDateString()}</span>
            </div>
            <div class="investment-detail">
                <span class="detail-label">Duration:</span>
                <span class="detail-value">${duration} Days</span>
            </div>
            <div class="investment-detail">
                <span class="detail-label">Amount:</span>
                <span class="detail-value investment-amount">${formatUSDT(amount)} USDT</span>
            </div>
            <div class="investment-detail">
                <span class="detail-label">Status:</span>
                <span class="detail-value"><span class="investment-status ${statusClass}">${status}</span></span>
            </div>
            <div class="investment-detail">
                <span class="detail-label">Total Earn:</span>
                <span class="detail-value">${formatUSDT(totalClaimed)} USDT</span>
            </div>
        `;
        
        investmentHistoryList.appendChild(investmentItem);
    }
}

async function loadReferralLevelsWithCounts() {
    if (!contract || !userAccount) return;
    
    try {
        const referralCounts = [];
        // Get referral counts for each level
        for (let i = 0; i < 15; i++) {
            try {
                const count = await contract.methods.getReferralsCountByLevel(userAccount, i + 1).call();
                referralCounts.push(parseInt(count));
            } catch (error) {
                referralCounts.push(0);
            }
        }
        
        generateReferralLevelsCompactWithCounts(referralCounts);
    } catch (error) {
        console.error('Error loading referral counts:', error);
        // Fallback if function not available
        const emptyCounts = Array(15).fill(0);
        generateReferralLevelsCompactWithCounts(emptyCounts);
    }
}

function startWithdrawTimer() {
    stopWithdrawTimer();
    if (!contract || !userAccount) return;
    withdrawTimerInterval = setInterval(async () => {
        try {
            const nextWithdrawTime = await contract.methods.getNextWithdrawTime(userAccount).call();
            const currentTime = Math.floor(Date.now() / 1000);
            if (nextWithdrawTime === '0') { document.getElementById('withdrawTimer').style.display = 'none'; return; }
            const timeRemaining = parseInt(nextWithdrawTime) - currentTime;
            if (timeRemaining <= 0) {
                document.getElementById('withdrawTimer').style.display = 'none';
                document.getElementById('withdrawROI').disabled = false;
                document.getElementById('withdrawROI').innerHTML = '<i class="fas fa-download"></i> Withdraw ROI';
            } else {
                document.getElementById('withdrawTimer').style.display = 'inline-flex';
                document.getElementById('withdrawROI').disabled = true;
                document.getElementById('withdrawROI').innerHTML = '<i class="fas fa-clock"></i> Locked';
                updateTimerDisplay(timeRemaining);
            }
        } catch (error) {}
    }, 1000);
}

function stopWithdrawTimer() { if (withdrawTimerInterval) { clearInterval(withdrawTimerInterval); withdrawTimerInterval = null; } }

function updateTimerDisplay(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    document.getElementById('timerHours').textContent = h.toString().padStart(2, '0');
    document.getElementById('timerMinutes').textContent = m.toString().padStart(2, '0');
    document.getElementById('timerSeconds').textContent = s.toString().padStart(2, '0');
}

function generateReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (linkInput && userAccount) linkInput.value = `${window.location.origin}${window.location.pathname}?ref=${userAccount}`;
}

function generateInvestmentPlans() {
    const plansContainer = document.getElementById('investmentPlans');
    if (!plansContainer) return;
    const plans = [
        {id: 0, name: 'Gold Plan', roi: '16% Daily', range: '10 - 100 USDT', duration: '7 Days', total: '112% Total Returns', features: ['16% Daily ROI', '7 Days Duration', '112% Total Returns'], featured: false},
        {id: 1, name: 'Platinum Plan', roi: '9% Daily', range: '50 - 100 USDT', duration: '14 Days', total: '126% Total Returns', features: ['9% Daily ROI', '14 Days Duration', '126% Total Returns'], featured: true},
        {id: 2, name: 'Diamond Plan', roi: '5% Daily', range: '100+ USDT', duration: '30 Days', total: '150% Total Returns', features: ['5% Daily ROI', '30 Days Duration', '150% Total Returns'], featured: false}
    ];
    plansContainer.innerHTML = plans.map(plan => `
        <div class="plan-card ${plan.featured ? 'featured' : ''}" data-plan-id="${plan.id}">
            <div class="plan-name">${plan.name}</div>
            <div class="plan-roi">${plan.roi}</div>
            <div class="plan-range">${plan.range}</div>
            <ul class="plan-features">${plan.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}</ul>
            <div class="plan-total">${plan.total}</div>
            <button class="btn btn--primary" style="margin-top: auto;">Select Plan</button>
        </div>
    `).join('');
    document.querySelectorAll('.plan-card').forEach(card => card.addEventListener('click', (e) => selectPlan(parseInt(e.currentTarget.getAttribute('data-plan-id')))));
}

function selectPlan(planId) {
    if (!userAccount) return showNotification('Please connect your wallet first!', 'error');
    const plansData = [{ id: 0, name: 'Gold Plan', roi: '16% Daily', min: 10, max: 100 }, { id: 1, name: 'Platinum Plan', roi: '9% Daily', min: 50, max: 100 }, { id: 2, name: 'Diamond Plan', roi: '5% Daily', min: 100, max: Infinity }];
    selectedPlan = plansData.find(p => p.id === planId);
    if (selectedPlan) showInvestmentForm();
}

function showInvestmentForm() {
    document.getElementById('investmentPlans').style.display = 'none';
    document.getElementById('investmentForm').style.display = 'block';
    document.getElementById('selectedPlanSummary').innerHTML = `<div style="color:white; font-weight:700;">${selectedPlan.name}</div><div style="color:var(--primary-accent);">${selectedPlan.roi}</div>`;
    const maxText = selectedPlan.max === Infinity ? 'Unlimited' : selectedPlan.max;
    document.getElementById('amountRange').textContent = `Min: ${selectedPlan.min} USDT, Max: ${maxText} USDT`;
    const amountInput = document.getElementById('investmentAmount');
    amountInput.min = selectedPlan.min;
    amountInput.value = '';
    updateInvestmentSummary();
}

function showPlans() {
    document.getElementById('investmentPlans').style.display = 'grid';
    document.getElementById('investmentForm').style.display = 'none';
    selectedPlan = null;
}

function updateInvestmentSummary() {
    // Removed fee and total pay display as requested
}

async function confirmInvestment() {
    if (!contract || !userAccount) return showNotification('Please connect wallet', 'error');
    if (!selectedPlan) return showNotification('Please select a plan', 'error');
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    if (amount < selectedPlan.min || (selectedPlan.max !== Infinity && amount > selectedPlan.max)) return showNotification('Invalid Amount', 'error');
    let refAddr = document.getElementById('referrerAddress').value.trim() || referralAddress || '0x0000000000000000000000000000000000000000';
    
    const confirmBtn = document.getElementById('confirmInvestment');
    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    confirmBtn.disabled = true;

    try {
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        const allowance = await usdtContract.methods.allowance(userAccount, CONTRACT_ADDRESS).call();
        if (new BigNumber(allowance).isLessThan(new BigNumber(amountWei))) {
            await usdtContract.methods.approve(CONTRACT_ADDRESS, '115792089237316195423570985008687907853269984665640564039457584007913129639935').send({ from: userAccount });
        }
        await contract.methods.invest(selectedPlan.id, amountWei, refAddr).send({ from: userAccount });
        showNotification('Investment successful!', 'success');
        investmentSuccessPopup.classList.add('active');
        await loadUserData(); await loadGlobalStats();
    } catch (error) {
        showNotification('Investment failed', 'error');
    } finally {
        confirmBtn.innerHTML = '<i class="fas fa-check-circle"></i> Confirm Investment';
        confirmBtn.disabled = false;
    }
}

async function withdrawROI() {
    if (!contract || !userAccount) return showNotification('Connect wallet', 'error');
    const btn = document.getElementById('withdrawROI'); btn.innerHTML = 'Withdrawing...'; btn.disabled = true;
    try { await contract.methods.withdrawROI().send({ from: userAccount }); showNotification('Success', 'success'); loadUserData(); } 
    catch { showNotification('Failed', 'error'); } finally { btn.innerHTML = '<i class="fas fa-download"></i> Withdraw ROI'; btn.disabled = false; }
}
async function withdrawReferral() {
     if (!contract || !userAccount) return showNotification('Connect wallet', 'error');
    try { await contract.methods.withdrawReferral().send({ from: userAccount }); showNotification('Success', 'success'); loadUserData(); } catch { showNotification('Failed', 'error'); }
}
async function withdrawLeadership() {
     if (!contract || !userAccount) return showNotification('Connect wallet', 'error');
    try { await contract.methods.withdrawLeadership().send({ from: userAccount }); showNotification('Success', 'success'); loadUserData(); } catch { showNotification('Failed', 'error'); }
}

function copyReferralLink() {
    navigator.clipboard.writeText(document.getElementById('referralLink').value).then(() => showNotification('Copied!', 'success'));
}

function generateReferralLevelsCompactWithCounts(referralCounts = Array(15).fill(0)) {
    const levelsContainer = document.getElementById('referralLevelsCompact');
    if (!levelsContainer) return;
    const levels = [
        { l: 1, c: '15%', r: '10', members: referralCounts[0] },
        { l: 2, c: '10%', r: '50', members: referralCounts[1] },
        { l: 3, c: '5%', r: '100', members: referralCounts[2] },
        { l: 4, c: '5%', r: '150', members: referralCounts[3] },
        { l: 5, c: '3%', r: '200', members: referralCounts[4] },
        { l: 6, c: '3%', r: '250', members: referralCounts[5] },
        { l: 7, c: '3%', r: '300', members: referralCounts[6] },
        { l: 8, c: '2%', r: '350', members: referralCounts[7] },
        { l: 9, c: '2%', r: '400', members: referralCounts[8] },
        { l: 10, c: '2%', r: '450', members: referralCounts[9] },
        { l: 11, c: '1%', r: '500', members: referralCounts[10] },
        { l: 12, c: '1%', r: '550', members: referralCounts[11] },
        { l: 13, c: '1%', r: '600', members: referralCounts[12] },
        { l: 14, c: '1%', r: '650', members: referralCounts[13] },
        { l: 15, c: '1%', r: '700', members: referralCounts[14] }
    ];
    levelsContainer.innerHTML = levels.map(level => `
        <div class="referral-level-compact">
            <div class="level-number-compact">${level.l}</div>
            <div class="level-commission-compact">${level.c}</div>
            <div class="level-requirement-compact">${level.r} USDT</div>
            <div class="level-members-compact" style="font-size: 0.7rem; color: var(--cyan-glow); margin-top: 4px;">
                Members: ${level.members}
            </div>
        </div>
    `).join('');
}

function generateReferralLevelsCompact() {
    // Initial empty state
    generateReferralLevelsCompactWithCounts(Array(15).fill(0));
}

function generateLeadershipLevelsCompact(teamCount = 0) {
    const levelsContainer = document.getElementById('leadershipLevelsCompact');
    if (!levelsContainer) return;
    const levels = [
        { l: 1, t: 'Leader', b: '3%', r: '200' },
        { l: 2, t: 'Senior', b: '7%', r: '500' },
        { l: 3, t: 'Executive', b: '10%', r: '1000' }
    ];
    levelsContainer.innerHTML = levels.map(level => `
        <div class="leadership-level-compact">
            <div class="level-number-compact">${level.l}</div>
            <div style="font-weight:600; color:white;">${level.t}</div>
            <div class="level-commission-compact">${level.b}</div>
            <div class="level-requirement-compact">${level.r} Members</div>
        </div>
    `).join('');
}

function showNotification(message, type = 'info') {
    notification.textContent = message; 
    notification.className = `notification ${type} show`;
    setTimeout(() => notification.classList.remove('show'), 5000);
}

function checkPreloader() { window.addEventListener('load', () => setTimeout(() => preloader.classList.add('fade-out'), 500)); }
