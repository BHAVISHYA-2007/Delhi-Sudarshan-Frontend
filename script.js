// script.js

// GLOBAL VARIABLE TO TRACK OPEN COMPLAINT
let currentItemIndex = null;

// --- 1. DATASETS ---
let data = [
    { 
        id: "SIG-9021", type: "Water Leakage", loc: "Defence Colony", status: "Pending", date: "2025-01-01",
        phone: "+91 98765 43210", dept: "Delhi Jal Board (DJB)", 
        img: "Complaint Photoes/SIG-9021.jpg",
        desc: "Huge water leakage near the metro station gate 2. It has been flowing for 4 hours and causing traffic jam."
    },
    {   id:"SIG-7004",type:"Illegal Garbage Dump", loc:"Gate 2, CR Park",status:"Solved", date: "2025-12-28",
        phone:"+91 98758 76412", dept:"MCD",
        img:"Complaint Photoes/SIG-7144.jpg",
        desc:"Illegal garbage dumping in causing problem major problems to nearby residents."
    },
    { 
        id: "SIG-8902", type: "Street Light", loc: "Vasant Kunj", status: "Solved", date: "2025-10-15",
        phone: "+91 99887 76655", dept: "BSES Rajdhani", 
        img: "Complaint Photoes/SIG-8902.jpg",
        desc: "Street lights in Block C are not working for the last 3 nights. It is very dark and unsafe for women."
    },
    { 
        id: "SIG-7721", type: "Deep Pothole", loc: "Okhala NSIC", status: "Pending", date: "2025-11-20", // Overdue Trigger
        phone: "+91 88776 65544", dept: "PWD Delhi", 
        img:"Complaint Photoes/SIG-7721.webp",
        desc: "A very deep pothole in the middle of the left lane. Two bikes slipped today morning. Urgent repair needed."
    },
    {   id:"SIG-7144",type:"Illegal Garbage Dump", loc:"Faridabad",status:"Pending", date: "2025-12-28",
        phone:"+91 98758 76412", dept:"MCD",
        img:"Complaint Photoes/SIG-7144.jpg",
        desc:"Illegal garbage dumping in dwarka sector 3 causing problem major problems to nearby residents."
    },
    {   id:"SIG-5632", type:"Damaged Road Dividers", loc:"Janakpuri", status:"Solved", date: "2025-09-10",
        phone:"+91 98563 45442",dept:"PWD Delhi", img: "Complaint Photoes/SIG-5632.avif", desc:"Road divider is damaged."
    },
    {   id: "SIG-2904",type: "Contaminated Water",loc: "Govindpuri",status: "Solved", date: "2025-08-05",
        phone: "+91 98223 34456",dept: "Delhi Jal Board", img: "Complaint Photoes/SIG-2904.jpg", desc: "Tap water is muddy."
    },
    {   id: "SIG-5102",type: "Power Fluctuations",loc: "CR Park Pocket-4",status: "Pending", date: "2025-01-10",
        phone: "+91 98456 22337",dept: "BSES Rajdhani", img:"", desc: "Voltage is fluctuating."
    },
    {   id:"SIG-7001",type:"Dead Animal", loc:"Gate 8, CR Park",status:"Solved", date: "2025-12-28",
        phone:"+91 98003 76412", dept:"MCD",
        img:"Complaint Photoes/SIG-7001",
        desc:"Dead animal body causing problem major problems to nearby residents."
    },
    {  id: "SIG-3101",type: "Garbage Not Collected",loc: "CR Parlk Central Park",status: "Pending", date: "2025-12-29",
       phone: "+91 97654 25678",dept: "MCD", img:"Complaint Photoes/SIG-3101.webp", desc: "Garbage overflowing."
    },
    {  id: "SIG-4134",type: "Unsafe Barricades",loc: "ITO",status: "Solved", date: "2025-07-20",
       phone: "+91 97654 52233",dept: "PWD Delhi", img: "", desc: "Temporary barricades unstable."  
    },
    {  id: "SIG-1121",type: "Water Supply Timing",loc: "Saket",status: "Pending", date: "2025-02-15",
       phone: "+91 98134 52123",dept: "DJB", img: "", desc: "Water supply timings irregular."
    },
    { 
        id: "SIG-9101", type: "Garbage Overflow", loc: "Lajpat Nagar II", status: "Pending", date: "2026-01-01",
        phone: "+91 98991 12233", dept: "MCD", 
        img: "Complaint Photoes/SIG-9101.avif", 
        desc: "Dustbin near Central Market is overflowing onto the street."
    },
    { 
        id: "SIG-9102", type: "Dead Animal", loc: "Kalkaji Extension", status: "Solved", date: "2025-12-20",
        phone: "+91 99882 23344", dept: "MCD", 
        img: "Complaint Photoes/SIG-9102.webp", 
        desc: "Dead stray dog causing foul smell near Block K park."
    },
    { 
        id: "SIG-9103", type: "Construction Debris", loc: "Greater Kailash I", status: "Pending", date: "2025-12-30",
        phone: "+91 88771 12233", dept: "MCD", 
        img: "Complaint Photoes/SIG-9103.webp", 
        desc: "Illegal dumping of construction waste (malba) on the sidewalk."
    },
    { 
        id: "SIG-9104", type: "Blocked Drain", loc: "South Ext Part 1", status: "Pending", date: "2025-12-28",
        phone: "+91 91234 56789", dept: "MCD", 
        img: "Complaint Photoes/SIG-9104.jpg", 
        desc: "Small roadside drain blocked by plastic, water stagnating."
    },
    { 
        id: "SIG-9105", type: "Unswept Roads", loc: "Malviya Nagar", status: "Solved", date: "2025-11-15",
        phone: "+91 99112 23344", dept: "MCD", 
        img: "Complaint Photoes/SIG-9105.jpg", 
        desc: "Safai karamchari has not visited Block B for 3 days."
    },
    { 
        id: "SIG-9106", type: "Public Toilet Dirty", loc: "Nehru Place", status: "Pending", date: "2026-01-02",
        phone: "+91 98110 09988", dept: "MCD", 
        img: "Complaint Photoes/SIG-9106.jpg", 
        desc: "Public toilet near electronics market is unusable and dirty."
    },
    { 
        id: "SIG-9107", type: "Illegal Hawker", loc: "Sarojini Nagar", status: "Pending", date: "2025-12-25",
        phone: "+91 77665 54433", dept: "MCD", 
        img: "Complaint Photoes/SIG-9107.avif", 
        desc: "Hawkers blocking the entry to the metro station."
    },
    { 
        id: "SIG-9108", type: "Park Maintenance", loc: "Defence Colony", status: "Solved", date: "2025-10-10",
        phone: "+91 99881 12299", dept: "MCD", 
        img: "Complaint Photoes/SIG-9108.webp", 
        desc: "Broken benches and overgrown grass in the C-Block park."
    },
    { 
        id: "SIG-9201", type: "Deep Pothole", loc: "Outer Ring Road, Chirag Delhi", status: "Pending", date: "2025-12-29",
        phone: "+91 98765 11223", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9201.webp", 
        desc: "Massive pothole on the flyover descent, dangerous for bikers."
    },
    { 
        id: "SIG-9202", type: "Broken Footpath", loc: "Hauz Khas", status: "Pending", date: "2025-12-31",
        phone: "+91 98100 22334", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9202.jpg", 
        desc: "Tiles missing on the footpath near the market entrance."
    },
    { 
        id: "SIG-9203", type: "Fallen Signboard", loc: "Mehrauli-Badarpur Road", status: "Solved", date: "2025-11-25",
        phone: "+91 99551 12233", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9203.jpg", 
        desc: "Direction signboard fell down due to wind."
    },
    { 
        id: "SIG-9204", type: "Waterlogging", loc: "Pul Prahladpur Underpass", status: "Pending", date: "2026-01-01",
        phone: "+91 88223 34455", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9204.webp", 
        desc: "Underpass starting to flood after light rain."
    },
    { 
        id: "SIG-9205", type: "Damaged Divider", loc: "August Kranti Marg", status: "Solved", date: "2025-09-15",
        phone: "+91 97112 23344", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9205.webp", 
        desc: "Car hit the divider, stones scattered on road."
    },
    { 
        id: "SIG-9206", type: "Speed Breaker Issue", loc: "Vasant Vihar", status: "Pending", date: "2025-12-27",
        phone: "+91 98115 56677", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9206.webp", 
        desc: "Unmarked speed breaker causing vehicles to jump."
    },
    { 
        id: "SIG-9207", type: "Road divider", loc: "Saket", status: "Pending", date: "2026-01-15",
        phone: "+91 99900 11223", dept: "PWD Delhi", 
        img: "Complaint Photoes/SIG-9207.webp", 
        desc: "Broken road divider in front of PVR Anupam. Very risky."
    },
    { 
        id: "SIG-9301", type: "Street Light Off", loc: "Green Park", status: "Pending", date: "2025-12-28",
        phone: "+91 98188 77665", dept: "BSES Rajdhani", 
        img: "Complaint Photoes/SIG-9301.jpg", 
        desc: "Entire row of street lights off in R-Block."
    },
    { 
        id: "SIG-9302", type: "No power", loc: "Okhla Phase 3", status: "Pending", date: "2026-01-01",
        phone: "+91 98711 22334", dept: "BSES Rajdhani", 
        img: "", 
        desc: "No power in the area since 5 hours."
    },
    { 
        id: "SIG-9303", type: "Power Cut", loc: "Chhatarpur", status: "Solved", date: "2025-12-15",
        phone: "+91 99110 02233", dept: "BSES Rajdhani", 
        img: "", 
        desc: "No electricity for 6 hours in the Enclave area."
    },
    { 
        id: "SIG-9304", type: "Hanging Wires", loc: "Kotla Mubarakpur", status: "Pending", date: "2025-12-26",
        phone: "+91 98112 23344", dept: "BSES Rajdhani", 
        img: "Complaint Photoes/SIG-9304.webp", 
        desc: "Loose electrical wires hanging very low over the street."
    },
    { 
        id: "SIG-9305", type: "Meter Box Open", loc: "Sarita Vihar", status: "Pending", date: "2025-12-30",
        phone: "+91 88001 12233", dept: "BSES Rajdhani", 
        img: "Complaint Photoes/SIG-9305.avif", 
        desc: "Main meter box door is broken and accessible to kids."
    },
    { 
        id: "SIG-9306", type: "Voltage Fluctuation", loc: "Khanpur", status: "Solved", date: "2025-08-20",
        phone: "+91 99887 76655", dept: "BSES Rajdhani", 
        img: "", 
        desc: "High voltage surge damaged home appliances."
    },
    { 
        id: "SIG-9307", type: "Pole Bent", loc: "Sangam Vihar", status: "Pending", date: "2026-01-02",
        phone: "+91 98765 43211", dept: "BSES Rajdhani", 
        img: "Complaint Photoes/SIG-9307.jpg", 
        desc: "Electric pole bent after being hit by a truck."
    },
    { 
        id: "SIG-9401", type: "Pipeline Burst", loc: "Sector A,Vasant Kunj", status: "Solved", date: "2026-01-15",
        phone: "+91 98101 23456", dept: "Delhi Jal Board (DJB)", 
        img: "Complaint Photoes/SIG-9401.jpeg", 
        desc: "Main supply pipe burst, gallons of water wasting."
    },
    { 
        id: "SIG-9402", type: "Dirty Water", loc: "Govindpuri", status: "Solved", date: "2025-12-10",
        phone: "+91 99552 23344", dept: "Delhi Jal Board (DJB)", 
        img: "Complaint Photoes/SIG-9402.webp", 
        desc: "Tap water is black and smelling like sewage."
    },
    { 
        id: "SIG-9403", type: "No Water Supply", loc: "Safdarjung Enclave", status: "Pending", date: "2026-01-02",
        phone: "+91 98113 34455", dept: "Delhi Jal Board (DJB)", 
        img: "", 
        desc: "No water supply in Block B for the last 48 hours."
    },
    { 
        id: "SIG-9404", type: "Sewer Overflow", loc: "Bhogal", status: "Pending", date: "2025-12-29",
        phone: "+91 88002 23344", dept: "Delhi Jal Board (DJB)", 
        img: "Complaint Photoes/SIG-9404.png", 
        desc: "Sewer water backflowing into ground floor houses."
    },
    { 
        id: "SIG-9405", type: "Tanker Request", loc: "Neb Sarai", status: "Solved", date: "2025-06-15",
        phone: "+91 99114 45566", dept: "Delhi Jal Board (DJB)", 
        img: "", 
        desc: "Urgent need for water tanker, borewell dried up."
    },
    { 
        id: "SIG-9406", type: "Leakage at Meter", loc: "Jangpura", status: "Pending", date: "2025-12-27",
        phone: "+91 98712 23344", dept: "Delhi Jal Board (DJB)", 
        img: "", 
        desc: "Water leaking from the connection point near meter."
    },
    { 
        id: "SIG-9407", type: "Low Pressure", loc: "East of Kailash", status: "Pending", date: "2025-12-31",
        phone: "+91 99998 87766", dept: "Delhi Jal Board (DJB)", 
        img: "", 
        desc: "Water pressure is too low to reach overhead tanks."
    }
];

// --- 2. LOADER & INIT ---
document.addEventListener("DOMContentLoaded", () => {
    checkOverdue(); 
    
    const statusText = document.querySelector('.changing-text');
    if (statusText) {
        const states = ["RECEIVING CITIZEN CALL...", "TRANSCRIBING AUDIO...", "EXTRACTING LOCATION...", "GENERATING REPORT...", "SYSTEM READY."];
        let step = 0;
        const interval = setInterval(() => {
            if (step < states.length) { statusText.innerText = states[step]; step++; } 
            else { clearInterval(interval); }
        }, 800);
    }
    setTimeout(() => { removeLoader(); }, 4500); 
    renderTable(); 
    initMainChart();
    initDeptChart(); // Added explicit call if needed, safe if function exists
});

function removeLoader() {
    const loader = document.getElementById('loader-screen');
    if (loader) { loader.style.opacity = '0'; setTimeout(() => { loader.style.display = 'none'; }, 800); }
}

// --- 3. OVERDUE LOGIC ---
function checkOverdue() {
    const today = new Date("2025-12-31"); 
    
    data.forEach(item => {
        if(item.date) {
            const complaintDate = new Date(item.date);
            const diffTime = Math.abs(today - complaintDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            
            if (item.status === 'Pending' && diffDays > 7) {
                item.status = 'Overdue';
            }
        }
    });
}

// --- 4. FILTER & RENDER ---
function filterTable() {
    const filterElem = document.getElementById('statusFilter');
    const filterValue = filterElem ? filterElem.value : 'All';
    let filteredData = [];
    
    if (filterValue === 'All') {
        filteredData = data;
    } else if (filterValue === 'NoEvidence') {
        filteredData = data.filter(item => !item.img || item.img === "");
    } else {
        filteredData = data.filter(item => item.status === filterValue);
    }
    renderTable(filteredData);
}

// Helper: Check if a complaint is dangerous
function isCritical(item) {
    // Keywords that trigger an EMERGENCY response
    const dangerWords = [
        "burst", "manhole","spark","collapse"
    ];
    
    // Check both Type and Description
    const text = (item.type + " " + item.desc).toLowerCase();
    return dangerWords.some(word => text.includes(word));
}

// 3. UPDATED RENDER TABLE (With Priority Sorting)
function renderTable(dataset) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    // Use dataset if provided, else use global data
    let displayData = dataset || [...data]; // Create a copy to sort

    // 🔴 SORTING LOGIC: Critical -> Overdue -> Normal
    displayData.sort((a, b) => {
        const aCrit = isCritical(a);
        const bCrit = isCritical(b);
        
        if (aCrit && !bCrit) return -1;
        if (!aCrit && bCrit) return 1;  
        return 0; 
    });

    if (displayData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color:#64748b;">No records found.</td></tr>';
        return;
    }

    displayData.forEach((item) => {
        let statusClass = 'st-pending';
        if (item.status === 'Solved') statusClass = 'st-solved';
        if (item.status === 'Rejected') statusClass = 'st-rejected';
        if (item.status === 'Overdue') statusClass = 'st-overdue';

        let rowClass = "";
        let typeHtml = item.type; // Default Type Text

        // CRITICAL CHECK
        if (isCritical(item) && item.status !== 'Solved' && item.status !== 'Rejected') {
            rowClass = "row-critical"; // Apply Red Style
            typeHtml = `<span class="badge-urgent">URGENT</span> ${item.type}`;
        }
        // Overdue Check (Secondary Priority)
        else if (item.status === 'Overdue') {
            rowClass = "row-overdue";
        }
        
        // No Photo Check
        if (!item.img || item.img === "") rowClass += " row-no-photo";

        // Find original index for the button action
        const originalIndex = data.findIndex(d => d.id === item.id);

        const row = `
            <tr class="${rowClass}" onclick="focusComplaint('${item.id}')">
                <td style="font-family: monospace; color: var(--primary); font-weight:600;">${item.id}</td>
                <td>${typeHtml}</td> <td>${item.loc}</td>
                <td><span class="status-badge ${statusClass}">${item.status}</span></td>
                <td><button class="btn-action" onclick="event.stopPropagation(); openAnalyzeModal(${originalIndex})">Analyze</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// --- 5. MODAL LOGIC (CLEANEST VERSION: NO APPROVE BUTTON, NO LOC NAME) ---
function openAnalyzeModal(index) {
    currentItemIndex = index;
    const item = data[index];

    console.log("🔍 Analyzing Item:", item.id);

    // 1. Populate Text Fields
    const fields = {
        'm-type': item.type,
        'm-status': item.status,
        'm-phone': item.phone,
        'm-region': item.loc,
        'm-dept': item.dept,
        'm-desc': item.desc,
        'm-date': item.date || "N/A"
    };

    for (const [id, value] of Object.entries(fields)) {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    }

    // 2. 📸 EVIDENCE IMAGE LOGIC
    const photoContainer = document.querySelector('.modal-img-container');
    
    if (photoContainer) {
        // A. Resolve Image Source
        let imgSrc = "https://via.placeholder.com/400x300?text=No+Evidence";
        
        if (item.img && item.img !== "") {
            if (item.img.includes("http")) {
                 imgSrc = `${item.img}?t=${new Date().getTime()}`;
            } else {
                imgSrc = item.img;
            }
        }

        // B. Get Location & Time
        const lat = item.lat ? parseFloat(item.lat).toFixed(4) : "28." + Math.floor(1000 + Math.random() * 9000); 
        const long = item.long ? parseFloat(item.long).toFixed(4) : "77." + Math.floor(1000 + Math.random() * 9000);
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        
        // C. INJECT HTML (Only Lat/Long + Time)
        photoContainer.innerHTML = `
            <div class="evidence-img-wrapper">
                <div class="verify-stamp">
                    <i class="ri-shield-check-fill"></i> OFFICIAL RECORD
                </div>
                <img src="${imgSrc}" class="evidence-img" alt="Evidence" onerror="this.src='https://via.placeholder.com/400?text=Image+Load+Error'">
            </div>

            <div class="geotag-box">
                <div class="geo-left">
                    <div class="geo-row">
                        <i class="ri-map-pin-2-fill" style="color: #facc15;"></i> 
                        <span style="font-size: 0.9rem;">${lat} N, ${long} E</span>
                    </div>
                </div>
                <div class="geo-right">
                    <div class="geo-row">
                        <span style="color:#facc15; font-weight:bold;">${time}</span>
                        <i class="ri-time-fill"></i>
                    </div>
                </div>
            </div>
        `;
    }

    // 3. FORCE HIDE APPROVE BUTTON
    const approveBtn = document.querySelector('.modal-action-btn.primary');
    if(approveBtn) {
        approveBtn.style.display = 'none';
    }

    // 4. Reset Reject Button Logic
    const rejectBtn = document.querySelector('.modal-action-btn.danger');
    if(rejectBtn) {
        rejectBtn.disabled = false;
        rejectBtn.style.opacity = '1';
        rejectBtn.style.cursor = 'pointer';
        
        // Clone to clear old event listeners
        const newBtn = rejectBtn.cloneNode(true);
        rejectBtn.parentNode.replaceChild(newBtn, rejectBtn);

        // Make Reject Button Full Width since Approve is gone
        newBtn.style.width = "100%"; 

        if (item.status === 'Solved') {
            newBtn.innerHTML = '<i class="ri-checkbox-circle-line"></i> Closed';
            newBtn.disabled = true;
            newBtn.style.opacity = '0.6';
        } else {
            newBtn.innerHTML = '<i class="ri-spam-line"></i> Reject';
            newBtn.onclick = function() { updateStatus('Rejected'); };
        }
    }

    // 5. Show the Modal
    document.getElementById('analyzeModal').style.display = 'flex';
}
function closeAnalyzeModal() { document.getElementById('analyzeModal').style.display = 'none'; }

// WEBRTC REJECT FUNCTION
async function updateStatus(action) {
    if (currentItemIndex === null) return;
    const item = data[currentItemIndex];

    if (action === 'Rejected') {
        const reason = prompt("Enter Rejection Reason:", "...............");
        if (!reason) return;

        alert("Calling Virtual Citizen Phone (WebRTC)...");

        try {
            // CALL THE BACKEND API
            const response = await fetch("https://delhi-sudarshan-backend.onrender.com/api/reject-complaint", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: item.id,
                    reason: reason
                })
            });

            const result = await response.json();

            if (result.success) {
                data[currentItemIndex].status = "Rejected";
                alert("Complaint Rejected.\n🔔 The Citizen Page should be ringing!");
                filterTable();
                closeAnalyzeModal();
            } else {
                alert(" Call failed: " + result.error);
            }
        } catch (err) {
            console.error(err);
            alert("Backend Error. Ensure server.js is running.");
        }
    }
    
    if (action === "Solved") {
        data[currentItemIndex].status = "Solved";
        filterTable();
        closeAnalyzeModal();
    }
}

// --- 6. CHARTS ---
function openTab(tabName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active-view'));
    const targetView = document.getElementById(tabName);
    if(targetView) targetView.classList.add('active-view');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const clickedBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.onclick && b.onclick.toString().includes(tabName));
    if(clickedBtn) clickedBtn.classList.add('active');
    if (tabName === 'reports') { setTimeout(initDeptChart, 100); }
}

function initMainChart() {
    const ctx = document.getElementById('mainChart');
    if(!ctx) return;
    if(window.myMainChart) window.myMainChart.destroy(); 
    window.myMainChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['JAN','FEB','MAR','APR','MAY','JUN','JULY','AUG','SEPT','OCT','NOV','DEC'],
            datasets: [{ label: 'Received', data: [12000, 16546,15560,12876,19432, 22083, 21043, 19023,25876,27054,24087, 28021], borderColor: '#2563eb', backgroundColor: 'rgba(37, 99, 235, 0.1)', borderWidth: 3, tension: 0.4, fill: true },
                        { label: 'Solved', data: [10000, 13078, 14008, 10099, 15008, 19056, 17000,15876,21987,23012,20342,26098], borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderWidth: 3, tension: 0.4, fill: true }]
        },
        options: { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false }, title: { display: true, text: 'Month', font: { weight: 'bold' } } }, y: { beginAtZero: true, title: { display: true, text: 'Number of Complaints', font: { weight: 'bold' } } } } }
    });
}

function initDeptChart() {
    const ctx = document.getElementById('deptChart');
    if(!ctx) return;
    if (window.myDeptChart instanceof Chart) window.myDeptChart.destroy();
    window.myDeptChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['PWD', 'Delhi Jal Board', 'BSES Rajdhani', 'MCD (South)'],
            datasets: [{ label: 'Received', data: [30050, 20765, 21021, 28987], backgroundColor: '#2563eb', borderRadius: 6 },
                        { label: 'Resolved', data: [20654, 15098, 18043, 28407], backgroundColor: '#10b981', borderRadius: 6 }]
        },
        options: { responsive: true, maintainAspectRatio: false, animation: { duration: 1000, easing: 'easeOutQuart' }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } } }
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('analyzeModal');
    if (event.target == modal) modal.style.display = "none";
}

// --- 8. NOTIFICATION CENTER LOGIC ---
const notifications = [
    { id: "SIG-8902", msg: "Street Light repaired in Vasant Kunj Block C.", dept: "BSES Rajdhani", time: "10 mins ago", type: "solved" },
    { id: "SIG-5632", msg: "Road Divider reconstruction completed.", dept: "PWD Delhi", time: "1 hr ago", type: "solved" },
    { id: "SYS-ALERT", msg: "High traffic load detected in server.", dept: "System Admin", time: "2 hrs ago", type: "alert" }
];

function renderNotifications() {
    const list = document.getElementById('notifList');
    const badge = document.getElementById('notifCount');
    if(!list) return;

    list.innerHTML = ''; 
    badge.innerText = notifications.length;

    notifications.forEach(n => {
        const item = `
            <div class="notif-card ${n.type}">
                <div class="n-top">
                    <span class="n-id">${n.id}</span>
                    <span class="n-time">${n.time}</span>
                </div>
                <p class="n-msg">${n.msg}</p>
                <span class="n-dept"><i class="ri-government-line"></i> ${n.dept}</span>
            </div>
        `;
        list.innerHTML += item;
    });
}

function toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    panel.classList.toggle('active');
}

// --- 9. SIMULATE LIVE NOTIFICATION ---
setTimeout(() => {
    addNewNotification(
        "SIG-9021", 
        "✅ Water Leakage Fixed: Maintenance team has resolved the issue at Defence Colony.", 
        "Delhi Jal Board", 
        "Just Now", 
        "solved"
    );
}, 5000);

function addNewNotification(id, msg, dept, time, type) {
    notifications.unshift({ id, msg, dept, time, type });
    renderNotifications();
    
    // Play a subtle sound or visual cue (Optional)
    const btn = document.querySelector('.notif-toggle-btn');
    if (btn) {
        btn.style.transform = "scale(1.2)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    }
}

// Initial Render
renderNotifications();

// --- 9. REAL-TIME DATA SYNC ---
async function fetchLiveComplaints() {
  try {
    // Fetch latest data from the backend
    const res = await fetch("https://delhi-sudarshan-backend.onrender.com/api/new-complaint");
    const serverData = await res.json();

    let needsRender = false;

    serverData.forEach(serverItem => {
        // 1. Find if we already have this item locally
        const localItem = data.find(d => d.id === serverItem.id);

        if (!localItem) {
            // CASE A: Brand New Complaint -> Add it
            console.log("New Complaint Found:", serverItem.id);
            data.unshift(serverItem); 
            needsRender = true;
            
            if (typeof addNewNotification === "function") {
                addNewNotification(serverItem.id, "New Complaint Received", serverItem.dept, "Live", "alert");
            }
        } else {
            // If server has an image, and it's different from our empty local image...
            if (serverItem.img && serverItem.img !== "" && localItem.img !== serverItem.img) {
                
                console.log(" New Photo Detected for:", serverItem.id);
                
                // 1. Update the local data with the new link & status
                localItem.img = serverItem.img;
                localItem.status = serverItem.status; 
                
                localItem.lat = serverItem.lat;
                localItem.long = serverItem.long;
                
                // 2. Mark for re-rendering
                needsRender = true; 
                
                // 3. Trigger a notification
                if (typeof addNewNotification === "function") {
                    addNewNotification(serverItem.id, "Evidence Uploaded", serverItem.dept, "Just Now", "solved");
                }
            }
        }
    });

    // 2. Refresh the table only if we found changes
    if (needsRender){
        renderTable(); 
        // Update charts
        if (typeof initMainChart === "function") initMainChart();
        if (typeof initDeptChart === "function") initDeptChart();
    }

  } catch (err) {
    // console.log("Backend offline...");
  }
}
// Keep the interval running
setInterval(fetchLiveComplaints, 2000);


// --- 10. MAP INTEGRATION: LIVE MAP, CLUSTERS, FILTERS ---

// Map globals
let map, markerCluster, markersIndex = {};
let mapClusteringEnabled = true; // default

function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    map = L.map('map', { zoomControl: true, preferCanvas: true }).setView([28.6139, 77.2090], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors', maxZoom: 19
    }).addTo(map);

    markerCluster = L.markerClusterGroup({ chunkedLoading: true, showCoverageOnHover: false });

    // add initial markers
    buildMapMarkers();

    // Populate department filter from data
    populateDepartmentFilter();

    // When user opens liveMap tab, invalidate size
    document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => {
        setTimeout(() => { if (map) map.invalidateSize(); }, 250);
    }));
}

function createIcon(status) {
    const color = status === 'Solved' ? '#10b981' : (status === 'Overdue' ? '#ef4444' : '#f59e0b');
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background:${color}; width:18px; height:18px; border-radius:50%; box-shadow:0 4px 12px rgba(0,0,0,0.25); border: 2px solid white;"></div>`,
        iconSize: [22, 22], iconAnchor: [11, 11]
    });
}

function getCoordinatesFor(item) {
    // Hardcoded map of neighbourhoods to precise coords (Delhi sample)
    const lookup = {
        'Defence Colony': [28.5700, 77.2325],
        'Vasant Kunj': [28.5355, 77.1754],
        'CR Park': [28.5453, 77.2696],
        'Okhla NSIC': [28.5450, 77.2684],
        'Janakpuri': [28.6420, 77.0910],
        'Govindpuri': [28.5518, 77.2454],
        'Lajpat Nagar II': [28.5692, 77.2432],
        'Saket': [28.5244, 77.2121],
        'Kalkaji Extension': [28.5600, 77.2500],
        'Malviya Nagar': [28.5428, 77.2210],
        'Sarojini Nagar': [28.5730, 77.1988],
        'Green Park': [28.5500, 77.1967],
        'Hauz Khas': [28.5467, 77.2014],
        'Mehrauli-Badarpur Road': [28.5140, 77.2100],
        'Saket': [28.5244, 77.2121],
        'Nehru Place': [28.5494, 77.2591],
        'Outer Ring Road, Chirag Delhi': [28.5365, 77.2390]
    };

    if (item.lat && item.long) return [parseFloat(item.lat), parseFloat(item.long)];
    if (item.loc && lookup[item.loc]) return lookup[item.loc];

    // fallback: random-ish within a bounding box of Delhi
    const lat = 28.4 + Math.random() * 0.5; // 28.4 - 28.9
    const lng = 76.9 + Math.random() * 0.7; // 76.9 - 77.6
    return [parseFloat(lat.toFixed(6)), parseFloat(lng.toFixed(6))];
}

function buildMapMarkers() {
    if (!map) return;

    markerCluster.clearLayers();
    markersIndex = {};

    const statusFilter = document.getElementById('mapStatusFilter') ? document.getElementById('mapStatusFilter').value : 'All';
    const deptFilter = document.getElementById('mapDeptFilter') ? document.getElementById('mapDeptFilter').value : 'All';

    data.forEach(item => {
        // apply map filters
        if (statusFilter !== 'All' && item.status !== statusFilter) return;
        if (deptFilter !== 'All' && item.dept !== deptFilter) return;

        const coords = getCoordinatesFor(item);
        const icon = createIcon(item.status);
        const marker = L.marker(coords, { icon: icon });

        const popupHtml = `
            <div style="min-width:220px;">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                    <div style="font-weight:800; color:var(--primary); font-family:monospace;">${item.id}</div>
                    <div style="font-size:0.8rem; color:#64748b;">${item.date || 'N/A'}</div>
                </div>
                <div style="margin-top:8px; font-weight:700;">${item.type}</div>
                <div style="margin-top:6px; color:#475569; font-weight:600;">${item.loc}</div>
                <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div style="font-size:0.85rem; color:#0f172a; font-weight:800;">${item.dept}</div>
                    <div><span class="status-badge ${item.status === 'Solved' ? 'st-solved' : item.status === 'Overdue' ? 'st-overdue' : 'st-pending'}">${item.status}</span></div>
                </div>
                <div style="margin-top:8px; display:flex; gap:8px;">
                    <button class="btn-action" style="flex:1" onclick="event.stopPropagation(); openAnalyzeModal(${data.findIndex(d=>d.id===item.id)})">Analyze</button>
                    <button class="btn-action" style="background:#2563eb;color:white;" onclick="event.stopPropagation(); focusComplaint('${item.id}')"><i class="ri-map-pin-user-line"></i></button>
                </div>
            </div>
        `;

        marker.bindPopup(popupHtml);

        // store by id for quick reference
        markersIndex[item.id] = marker;

        if (mapClusteringEnabled) markerCluster.addLayer(marker);
        else marker.addTo(map);
    });

    if (mapClusteringEnabled) map.addLayer(markerCluster);
}

function toggleMapClustering() {
    mapClusteringEnabled = !mapClusteringEnabled;
    const btn = document.getElementById('mapClusterToggle');
    if (btn) btn.style.background = mapClusteringEnabled ? 'var(--primary)' : '';
    buildMapMarkers();
}

function applyMapFilters() {
    buildMapMarkers();
}

function populateDepartmentFilter() {
    const deptSet = new Set();
    data.forEach(d => { if (d.dept) deptSet.add(d.dept); });
    const select = document.getElementById('mapDeptFilter');
    if (!select) return;
    const existing = new Set(Array.from(select.options).map(o => o.value));
    deptSet.forEach(d => { if (!existing.has(d)) { const opt = document.createElement('option'); opt.value = d; opt.text = d; select.appendChild(opt); } });
}

function focusComplaint(id) {
    if (!map || !markersIndex[id]) {
        // attempt to build marker and then focus
        buildMapMarkers();
    }
    const marker = markersIndex[id];
    if (!marker) return;
    if (!map.hasLayer(marker)) marker.addTo(map);
    map.setView(marker.getLatLng(), 16, { animate: true });
    marker.openPopup();

    // Visual pulse effect on marker by toggling style
    const el = marker._icon;
    if (el) {
        el.style.transition = 'transform 0.3s ease';
        el.style.transform = 'scale(1.4)';
        setTimeout(() => { if (el) el.style.transform = 'scale(1)'; }, 700);
    }

    // also scroll table to row (if present) and highlight briefly
    const rows = document.querySelectorAll('#tableBody tr');
    rows.forEach(r => {
        const firstCell = r.querySelector('td');
        if (firstCell && firstCell.innerText.trim() === id) {
            r.scrollIntoView({behavior:'smooth', block:'center'});
            r.classList.add('flash-row');
            setTimeout(()=> r.classList.remove('flash-row'), 1200);
        }
    });
}

function fitToAllMarkers() {
    if (!map) return;
    try {
        const bounds = mapClusteringEnabled ? markerCluster.getBounds() : L.featureGroup(Object.values(markersIndex)).getBounds();
        if (bounds && bounds.isValid()) map.fitBounds(bounds.pad(0.2));
    } catch (e) { console.warn('No valid bounds yet.'); }
}

function centerToCity() { if (map) map.setView([28.6139, 77.2090], 12); }

// ensure map is initialized on DOM ready
window.addEventListener('load', function() { setTimeout(() => { initMap(); }, 800); });

// Hook into live update to refresh markers when new items appear
const originalFetchLiveComplaints = fetchLiveComplaints;
fetchLiveComplaints = async function() {
    await originalFetchLiveComplaints();
    // rebuild markers to include any new coordinates
    if (map) buildMapMarkers();
}

// --- 11. ADVANCED AI CLUSTERING (Department + Locality) ---
let isClusterMode = false;

//to extracting the "Main Area" from a messy address
function getLocality(address) {
    const normalize = address.toLowerCase();
    
    //Define the main areas you expect in your demo
    if (normalize.includes("cr park") || normalize.includes("crpark")) return "CR Park";
    if (normalize.includes("okhla")) return "Okhla Industrial Area";
    if (normalize.includes("vasant kunj")) return "Vasant Kunj";
    if (normalize.includes("defence colony")) return "Defence Colony";
    if (normalize.includes("lajpat")) return "Lajpat Nagar";
    if (normalize.includes("kalkaji")) return "Kalkaji";
    if (normalize.includes("saket")) return "Saket";
    if (normalize.includes("janakpuri")) return "Janakpuri";
    
    return address; // Fallback: Use full address if no keyword matches
}

function toggleClusterMode() {
    isClusterMode = !isClusterMode;
    const btn = document.querySelector('button[onclick="toggleClusterMode()"]');
    
    if (isClusterMode) {
        if(btn) {
            btn.style.background = "var(--primary)";
            btn.style.color = "white";
            btn.innerHTML = '<i class="ri-file-list-line" style="color: white"></i>Show List';
        }
        renderClusteredTable();
    } else {
        if(btn) {
            btn.style.background = "";
            btn.style.color = "";
            btn.innerHTML = '<i class="ri-node-tree"></i>Cluster View';
        }
        renderTable(); 
    }
}

function renderClusteredTable() {
    const tbody = document.getElementById('tableBody');
    if(!tbody) return;
    tbody.innerHTML = '';

    // 1. Group Data by "Department + Locality"
    const clusters = {};
    
    data.forEach(item => {
        if (item.status !== 'Solved' && item.status !== 'Work Not Done') return; 
        
        const locality = getLocality(item.loc);
        const key = `${item.dept}-${locality}`; // GROUPING KEY
        
        if (!clusters[key]) {
            clusters[key] = {
                id: `GRP-${Math.floor(Math.random()*10000)}`, 
                rowId: `row-${key.replace(/[^a-zA-Z0-9]/g, '')}`, 
                dept: item.dept,
                loc: locality, 
                count: 0,
                ids: [], 
                types: new Set(),
                isVerified: false,
                isFailed: false // Track failures
            };
        }
        
        if (item.isVerified) clusters[key].isVerified = true;
        if (item.status === 'Work Not Done') clusters[key].isFailed = true;

        clusters[key].count++;
        clusters[key].ids.push(item.id);
        clusters[key].types.add(item.type);
    });

    const clusterArray = Object.values(clusters);
    
    if (clusterArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">No Solved Clusters available for Audit.</td></tr>';
        return;
    }

    // 2. Render the Clusters
    clusterArray.forEach((cluster) => {
        const issueSummary = Array.from(cluster.types).join(", ").substring(0, 50) + (cluster.types.size > 2 ? "..." : "");

        // Default Styles
        let rowStyle = "background: rgba(240, 253, 244, 0.5); border-left: 4px solid #10b981;";
        let statusBadge = '<span class="status-badge st-pending" style="background:#e2e8f0; color:#475569;">Unverified</span>';
        let actionButton = `
            <button class="btn-action" style="background-color: #2563eb; color: white;" 
                onclick="openGroupVerifyModal('${cluster.ids.join(',')}', '${cluster.dept}', '${cluster.loc}', ${cluster.count}, '${cluster.rowId}')">
                <i class="ri-spy-line"></i> Surprise Audit
            </button>`;

        // 🟢 STATE 1: VERIFIED
        if (cluster.isVerified) {
            rowStyle = "background: rgba(22, 163, 74, 0.2); border-left: 4px solid #059669;";
            statusBadge = '<span class="status-badge st-solved" style="background:#059669; color:white;"><i class="ri-shield-check-fill"></i> VERIFIED GENUINE</span>';
            actionButton = '<button class="btn-action" style="background-color: #059669; color: white; cursor: default; opacity: 0.8;"><i class="ri-check-double-line"></i> Audit Passed</button>';
        }

        // 🔴 STATE 2: FAILED (RED)
        if (cluster.isFailed) {
            rowStyle = "background: rgba(239, 68, 68, 0.15); border-left: 4px solid #ef4444;";
            statusBadge = '<span class="status-badge st-rejected" style="background:#ef4444; color:white;"><i class="ri-alert-line"></i> WORK NOT DONE</span>';
            actionButton = '<button class="btn-action" style="background-color: #ef4444; color: white; cursor: not-allowed; opacity: 0.8;"><i class="ri-alarm-warning-line"></i> Flagged</button>';
        }

        const row = `
            <tr id="${cluster.rowId}" class="cluster-row" style="${rowStyle}">
                <td style="font-weight:bold; color: #1e293b; font-family:monospace;">${cluster.id}</td>
                <td style="font-weight:600;">
                    ${cluster.dept} <br>
                    <span style="font-size:0.8em; color:#64748b; font-weight:normal;">Claimed Fixed: ${issueSummary}</span>
                </td>
                <td>
                    <i class="ri-map-pin-range-line"></i> ${cluster.loc} 
                    <span class="status-badge st-solved" style="font-size:0.7em; margin-left:5px;">${cluster.count} Claims</span>
                </td>
                <td class="cluster-status">${statusBadge}</td>
                <td class="cluster-action">${actionButton}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}
async function openGroupVerifyModal(ids, dept, loc, count, rowId) {
    const confirmAction = confirm(
        `INITIATE call? \n\n` +
        `Action: System will dial a citizen. We will wait for their response.`
    );

    if (confirmAction) {
        alert(`Connecting... Please wait for audit to be done.`);

        try {
            const response = await fetch("https://delhi-sudarshan-backend.onrender.com/api/audit-cluster", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ loc, dept, count })
            });

            const result = await response.json();

            if (result.success) {
                const callSid = result.callSid;
                console.log("Tracking Call:", callSid);
                
                // Poll for status every 2 seconds
                const poller = setInterval(async () => {
                    const check = await fetch(`https://delhi-sudarshan-backend.onrender.com/api/check-audit-status/${callSid}`);
                    const data = await check.json();
                    
                    console.log("Audit Status:", data.status);

                    if (data.status === '1') {
                        clearInterval(poller);
                        markClusterVerified(rowId, loc, count, ids);
                    } 
                    else if (data.status === '2') {
                        clearInterval(poller);
                        markClusterFailed(rowId, loc, count, ids);
                    }
                }, 2000);

            } else {
                alert("Audit Call Failed: " + result.error);
            }

        } catch (err) {
            console.error(err);
            alert("Server Error.");
        }
    }
}

// Helper to update UI visuals
function markClusterVerified(rowId, loc, count, ids) {
    alert(`SERVICE VALIDATED!\n\nThe Citizen has confirmed satisfaction with the resolution.\n\nTicket is now permanently CLOSED.`);
    const idArray = ids.split(',');
    idArray.forEach(id => {
        const item = data.find(d => d.id === id);
        if (item) {
            item.isVerified = true; // This saves the status in memory
        }
    });       
    const row = document.getElementById(rowId);
    if (row) {
        row.style.borderLeft = "4px solid #059669"; 
        row.style.background = "rgba(22, 163, 74, 0.2)"; 
        row.style.transition = "all 0.5s ease";

        const statusCell = row.querySelector('.cluster-status');
        if (statusCell) {
            statusCell.innerHTML = '<span class="status-badge st-solved" style="background:#059669; color:white;"><i class="ri-shield-check-fill"></i> VERIFIED</span>';
        }

        const actionCell = row.querySelector('.cluster-action');
        if (actionCell) {
            actionCell.innerHTML = '<button class="btn-action" style="background-color: #059669; color: white; cursor: default; opacity: 0.8;"><i class="ri-check-double-line"></i>Citizen Assurance check done.</button>';
        }
    }
    
    // Add a notification
    if (typeof addNewNotification === "function") {
        addNewNotification("CITIZEN ASSURANCE SYSTEM", `Service validation in ${loc} successful. ${count} tickets verified.`, "QA-System", "Just Now", "solved");
    }
}
// Helper to update UI visuals for FAILURE (Press 2)
function markClusterFailed(rowId, loc, count, ids) {
    alert(`DISCREPANCY DETECTED\n\nCitizen reports the issue persists on the ground.\n\nAction: Ticket Re-opened for Priority Rectification.`);            
    // 1. Update Data Model
    const idArray = ids.split(',');
    idArray.forEach(id => {
        const item = data.find(d => d.id === id);
        if (item) {
            item.status = 'Action Required'; 
            item.isVerified = false; 
        }
    });

    // 2. VISUAL UPDATE: Turn the Row Red
    const row = document.getElementById(rowId);
    if (row) {
        row.style.borderLeft = "4px solid #ef4444"; 
        row.style.background = "rgba(239, 68, 68, 0.15)"; 
        row.style.transition = "all 0.5s ease";

        const statusCell = row.querySelector('.cluster-status');
        if (statusCell) {
            statusCell.innerHTML = '<span class="status-badge st-rejected" style="background:#ef4444; color:white;"><i class="ri-alert-line"></i>Ticket Reopen</span>';
        }

        const actionCell = row.querySelector('.cluster-action');
        if (actionCell) {
            actionCell.innerHTML = '<button class="btn-action" style="background-color: #ef4444; color: white; cursor: not-allowed; opacity: 0.8;"><i class="ri-alarm-warning-line"></i> Flagged</button>';
        }
    }
    
    // Add a notification
    if (typeof addNewNotification === "function") {
        addNewNotification("DISCREPANCY DETECTED!", `Gap Identified in ${loc}. Citizen denied resolution.`, "Citizen Assurance", "Just Now", "alert");
    }
}









