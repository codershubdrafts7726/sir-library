document.addEventListener('DOMContentLoaded', function(){
    // Active nav highlight
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a=>{ if(a.getAttribute('href')===path) a.classList.add('active'); });

    // Accordion for announcements
    document.querySelectorAll('.acc-header').forEach(h=>{
        h.addEventListener('click', ()=>{
            const body = h.parentElement.querySelector('.acc-body');
            const isOpen = body.style.display === 'block';
            
            // Close all other open items
            document.querySelectorAll('.acc-body').forEach(b=>b.style.display='none');
            
            // Toggle the clicked item
            if(!isOpen) body.style.display = 'block';

            // Also manage the '+' sign if needed in your CSS (not visible in JS)
            document.querySelectorAll('.acc-item').forEach(item => item.classList.remove('active'));
            if (!isOpen) h.parentElement.classList.add('active');
        });
    });

    // Drawer toggle (mobile)
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.querySelector('.drawer');
    const backdrop = document.querySelector('.drawer-backdrop');
    if(hamburger && drawer && backdrop){
        const toggleDrawer = (open) => {
            if (open) {
                drawer.classList.add('open'); 
                backdrop.classList.add('open'); 
                drawer.setAttribute('aria-hidden','false'); 
                backdrop.setAttribute('aria-hidden','false');
            } else {
                drawer.classList.remove('open'); 
                backdrop.classList.remove('open'); 
                drawer.setAttribute('aria-hidden','true'); 
                backdrop.setAttribute('aria-hidden','true');
            }
        };

        hamburger.addEventListener('click', ()=>{ toggleDrawer(true); });
        backdrop.addEventListener('click', ()=>{ toggleDrawer(false); });
        document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ toggleDrawer(false); }});
    }

    // Demo search button (homepage)
    const searchBtn = document.getElementById('searchBtn');
    const searchBox = document.getElementById('searchBox');
    if(searchBtn && searchBox){
        searchBtn.addEventListener('click', ()=>{
            alert('Search is demo-only. Replace with OPAC integration.');
        });
    }

    // Books search on books page
    const booksSearch = document.getElementById('booksSearch');
    if(booksSearch){
        booksSearch.addEventListener('input', function(e){
            const q = e.target.value.toLowerCase();
            document.querySelectorAll('#booksTable tbody tr').forEach(tr=>{
                tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
            });
        });
    }

    // --- NEW: Email Fallback (This handles the scenario where mailto: fails) ---
    // If the mailto: link fails to open, this ensures the user can still get the email address.
    document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
        emailLink.addEventListener('click', (e) => {
            // Get the raw email address from the href attribute
            const email = emailLink.getAttribute('href').replace('mailto:', '');

            // Use a short delay before the fallback to give the mailto: link time to fire
            setTimeout(() => {
                // If the user's email client hasn't launched (which is the user-side issue),
                // we provide the email address via an alert.
                if (e.defaultPrevented === false) { 
                    alert(`If your email client did not launch, you can manually use this address: ${email}`);
                }
            }, 500); // 500ms delay
        });
    });
});