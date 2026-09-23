/* IRTH — site logic (exported from the design source) */
class Component extends DCLogic {
  data() {
    if (!this._d) {
      const P = [[27976, "Ajwa Al Qassim Nut-Stuffed Dates", "Dates", 10000, "box", "Ajwa Al Qassim dates filled with nuts and prepared as a premium bite-sized gift.", "Ajwa Al Qassim dates filled with nuts and arranged in premium gift packaging. Designed for individual serving or as part of a larger date collection."], [27966, "Al Ula Seven-Date Gift Box", "Dates", 10000, "box", "A compact presentation box featuring seven carefully selected Al Ula dates.", "Seven Al Ula dates presented in a fitted acrylic or hard-cover box designed specifically for the seven-piece selection. Sourced from Al Madinah Al Munawwarah and prepared as an elegant individual gift."], [27982, "Arabic Coffee", "Arabic Coffee & Dallah", 10000, "saffron", "Traditional Arabic coffee prepared for an elegant IRTH presentation.", "Arabic coffee sourced from Al Madinah Al Munawwarah and presented in a dedicated metal tin designed for premium serving and gifting."], [27981, "Arabic Coffee Dallah Gift Set", "Arabic Coffee & Dallah", 10000, "burner", "A traditional Arabic coffee dallah presented as an elegant gift set.", "A traditional Arabic coffee dallah presented in a fitted carton gift box with a dedicated recess for the dallah and an Arabic coffee cup. The complete package can also be paired with Arabic coffee and a selection of stuffed or chocolate-covered dates."], [27990, "Arabic Gum Drink", "Beverages", 10000, "oil", "Arabic gum offered pure or blended with selected traditional flavors.", "Arabic gum sourced from a local company and presented as a premium traditional beverage blend. Available pure or combined with selected ingredients for a distinctive flavor profile."], [28008, "Barley Coffee", "Beverages", 10000, "oil", "A warm roasted barley beverage prepared as a caffeine-free coffee-style drink.", "Barley coffee presented in a small metal tin. The beverage collection is designed around approximately 150–250 g packs, depending on the product and tin capacity."], [27979, "Chocolate Date Fingers", "Dates", 10000, "box", "Chocolate date fingers presented in a clean, structured gift format.", "Chocolate date fingers arranged in a carton box with internal lengthwise dividers, keeping each piece neatly separated for presentation."], [27978, "Date Truffles", "Dates", 10000, "box", "A refined date truffle selection with a smooth, rich texture.", "Date truffles prepared from finely processed dates and presented in a hard-cover gift box. Designed for premium gifting and elegant serving."], [27977, "Chocolate-Covered Dates", "Dates", 10000, "box", "Selected dates finished with a smooth chocolate coating.", "Selected dates coated in chocolate and presented in premium gift packaging. Suitable as a standalone treat or as part of a mixed date and chocolate collection."], [27980, "Medjool Premium Small Dates", "Dates", 10000, "box", "Premium small Medjool dates selected for a refined everyday or gifting presentation.", "Premium Small Medjool dates sourced from a high-quality local farm and presented in IRTH gift packaging."], [27955, "Stuffed Premium Dates", "Dates", 10000, "box", "Premium Ajwa and Medjool dates with a choice of refined fillings.", "Large Ajwa Al Madinah and Premium Large Medjool dates prepared with a selection of fillings. Each piece is presented in a divided hard-cover box with individual paper cups for a clean, premium presentation. Ajwa is sourced from Al Madinah Al Munawwarah, while Medjool is sourced from a high-quality local farm."], [27954, "Raw Dates Selection", "Dates", 10000, "box", "A curated selection of naturally served dates, available in classic Madinah varieties and premium Medjool.", "A refined selection of dates served without added fillings or coatings. Available in 500 g and 1 kg boxes. Madinah varieties are sourced from Al Madinah Al Munawwarah, while the Medjool selection is sourced from a local farm. Gift presentation uses IRTH-branded outer packaging."], [27859, "Premium Dates Signature", "Luxury Dates", 795, "box", "A distinguished selection of premium Madinah dates in a sophisticated gold gift box.", "IRTH Signature Dates Gift Box: a distinguished selection of premium Madinah dates in a sophisticated gold gift box. A first-class gift for every distinguished occasion. Premium · Signature · Gift."], [28041, "Millet Date Maamoul", "Maamoul", 10000, "box", "Millet maamoul filled with dates and individually wrapped for freshness.", "Millet date maamoul with each piece individually wrapped, then arranged in a hard-cover or premium carton presentation box. Suitable as a standalone sweet or as part of an Arabic coffee gift set."], [28035, "Organic Madinah Sidr", "Sidr", 10000, "oil", "Organic Madinah Sidr presented as a complete traditional care set.", "Organic Sidr sourced from Al Madinah Al Munawwarah and presented in a small metal tin. The hard-cover gift box includes the Sidr tin, rose water, a wooden spoon, a wooden mixing bowl and tools, plus an instruction card explaining preparation and use."], [28034, "Black Seed Honey", "Honey", 10000, "saffron", "Honey infused with the distinctive character of black seed.", "Black seed honey packaged in a glass jar with an IRTH-branded label and protected in fitted premium packaging for serving and gifting."], [28033, "Sidr Honey", "Honey", 10000, "saffron", "Sidr honey presented in a premium glass jar.", "Sidr honey packaged in a glass jar with an IRTH-branded label. The shipping carton includes a fitted recess for the jar and a wooden honey spoon."], [28026, "Madinah Fragrance Collection", "Perfumes", 10000, "burner", "A coordinated unisex fragrance collection built around one signature Madinah-inspired scent.", "A coordinated fragrance collection using the same signature scent across complementary formats for layering and longer-lasting wear. The collection is presented in premium hard-cover packaging."], [28025, "Chocolate-Coated Nuts", "Nuts", 10000, "saffron", "Selected premium nuts finished with a chocolate coating.", "Chocolate-coated nuts packed in dedicated IRTH metal tins and suitable for individual serving or inclusion in a premium nut gift collection."], [27991, "Premium Plain Nuts", "Nuts", 10000, "saffron", "A premium selection of plain nuts presented in IRTH metal tins.", "Premium plain nuts packed in dedicated metal tins. A three-tin gift carton can be assembled from the customer’s selected varieties, while the full collection can be presented in a hard-cover gift box."], [28022, "Olive Oil", "Oils", 10000, "oil", "Pure olive oil presented in a premium IRTH glass bottle.", "Olive oil packaged in a glass bottle with an IRTH-branded label. Each bottle is protected in an individual carton box suitable for safe shipping and gifting."], [28021, "Golden Milk", "Beverages", 10000, "saffron", "A warming golden milk blend prepared for a comforting premium drink.", "Golden milk presented as part of the IRTH beverage collection in premium retail packaging."], [28015, "Karak Tea", "Beverages", 10000, "saffron", "A rich, aromatic Karak tea blend prepared for a premium beverage collection.", "Karak tea presented in a small metal tin as part of the IRTH beverage collection."], [28014, "Madinah Rose", "Beverages", 10000, "saffron", "A delicate Madinah rose infusion with a naturally aromatic character.", "Madinah rose sourced from Al Madinah Al Munawwarah and presented in a small metal tin for premium serving and gifting."], [28013, "Basil Herbal Infusion", "Beverages", 10000, "oil", "A fragrant basil infusion prepared for the IRTH herbal beverage collection.", "Basil presented in a small metal tin as part of the IRTH herbal beverage range."], [28012, "Madinah Mint", "Beverages", 10000, "oil", "A fragrant Madinah mint herbal infusion.", "Madinah mint sourced from Al Madinah Al Munawwarah and presented in a small metal tin for a clean, premium herbal presentation."], [28011, "Talbina", "Beverages", 10000, "oil", "A traditional barley-based Talbina blend presented in IRTH packaging.", "Talbina sourced from Al Madinah Al Munawwarah and presented in a small metal tin. The beverage collection is designed around approximately 150–250 g packs, depending on the product and tin capacity."], [28010, "Black Seed Herbal Drink", "Beverages", 10000, "oil", "A traditional black seed drink prepared for a premium herbal collection.", "Black seed herbal drink presented in a small metal tin. The beverage collection is designed around approximately 150–250 g packs, depending on the product and tin capacity."], [28009, "Date Seed Powder", "Beverages", 10000, "box", "Finely prepared date seed powder for a warm, heritage-inspired beverage.", "Date seed powder presented in a small metal tin. The beverage collection is designed around approximately 150–250 g packs, depending on the product and tin capacity."], [28004, "Gemstone Prayer Beads", "Prayer Beads", 10000, "beads", "Gemstone prayer beads inspired by the spiritual character of the Haram.", "Gemstone prayer beads presented in a crafted wooden box with IRTH-inspired shell or brass detailing. The fitted interior includes a dedicated space for the beads and a small musk or oud fragrance bottle."], [27988, "Wooden Prayer Beads", "Prayer Beads", 10000, "beads", "Traditional prayer beads crafted from distinctive natural woods.", "Wooden prayer beads presented in a cylindrical carton box with an information card describing the selected wood. Sourced from Al Madinah Al Munawwarah and designed for a refined heritage-inspired presentation."], [27874, "Luxury Prayer Beads", "Prayer Beads", 395, "beads", "Crafted from premium natural stones and presented in a signature gift box with a certificate of authenticity and a luxury pouch.", "IRTH Luxury Prayer Beads: crafted from premium natural stones and presented in a signature gift box with a certificate of authenticity and a luxury pouch. Timeless Heritage · Lasting Legacy."], [27989, "Luxury Prayer Rug", "Prayer Rugs", 10000, "rug", "A heritage-inspired prayer rug available in two premium thickness options.", "A refined prayer rug collection inspired by sacred Madinah landmarks, including Rawdah, Dhul-Qiblatayn, Quba and Mihrab themes. The 8 mm presentation uses a rectangular hard-cover box with a leather feel, closure and carrying handle. The 11 mm presentation uses a leather-style rectangular case with a carrying handle and space for a rug fragrance spray."], [27866, "Luxury Prayer Rug", "Spiritual", 1095, "rug", "Crafted to reflect the authenticity of Islamic heritage. Presented in a signature gift box with a certificate of authenticity.", "IRTH Luxury Prayer Rug: crafted to reflect the authenticity of Islamic heritage. Presented in a signature gift box with a certificate of authenticity. A distinguished gift for sacred occasions."], [27987, "Incense Burner", "Incense", 10000, "burner", "A refined incense burner available in metal or wood.", "Incense burner sourced from Al Madinah Al Munawwarah and presented in a fitted carton box. The gift presentation includes a dedicated space for the burner and a charcoal holder."], [27986, "Frankincense & Mastic", "Incense", 10000, "burner", "Traditional aromatic resins presented in premium IRTH packaging.", "A selection of Arabic frankincense and mastic presented in compact premium packaging for personal use or gifting."], [27956, "Oud", "Incense", 10000, "burner", "Premium oud offered in two traditional presentation styles.", "Oud sourced from Al Madinah Al Munawwarah and presented in small IRTH-branded metal tins. Each presentation includes a product card explaining the oud type and recommended burning method."], [27876, "Incense Burner", "Fragrances", 495, "burner", "Handcrafted ceramic incense burner with traditional Islamic geometric patterns. Functional and decorative.", "Handcrafted ceramic incense burner with traditional Islamic geometric patterns. Functional and decorative."], [27869, "Premium Saffron", "Luxury Gifts", 295, "saffron", "100% natural whole saffron threads, hand-selected for superior colour, fragrance, and quality.", "IRTH Premium Saffron: 100% natural whole saffron threads, hand-selected for superior colour, fragrance, and quality. Presented in an elegant glass jar with a certificate of authenticity."], [27863, "Black Seed Oil", "Madinah Herbs", 195, "oil", "Cold-pressed to preserve full natural properties. 100% natural, additive-free.", "IRTH Pure Black Seed Oil: cold-pressed to preserve full natural properties. 100% natural, additive-free. Comes with a certificate of authenticity in premium packaging."]];
      const IMG = {"box": "assets/b8897db353bb6fbf6d36914d90673595.jpg", "saffron": "assets/32b7ea9f9f64321ad9de9548d8a844f6.jpg", "oil": "assets/dd205e899f245a5f9ba1fce2e6e12617.jpg", "burner": "assets/b247b083633db71bb8b348a213d72eb7.jpg", "beads": "assets/c3473579fba6ba93062e8cb11c006ba4.jpg", "rug": "assets/e0eb246462e473ac196747bf8b4917ca.jpg"};
      const CATS = [{"name": "Dates", "hero": "assets/4fe84d8fabde8fc82aecebe98e121c90.jpg", "featured": true, "img": "assets/4fe84d8fabde8fc82aecebe98e121c90.jpg"}, {"name": "Fragrances", "featured": true, "img": "assets/2168031f83cbb81ce211badcc6566d56.jpg", "hero": "assets/2168031f83cbb81ce211badcc6566d56.jpg"}, {"name": "Spiritual", "featured": true, "img": "assets/e64dcd09dcce56b7c8f94911f0b6a633.jpg", "hero": "assets/e64dcd09dcce56b7c8f94911f0b6a633.jpg"}, {"name": "Prayer Beads", "featured": true, "img": "assets/38c88e347c9dc1ee8cb0a2dcc8424c5b.jpg", "hero": "assets/38c88e347c9dc1ee8cb0a2dcc8424c5b.jpg"}, {"name": "Madinah Herbs", "featured": true, "img": "assets/0bdf9390c478be673e72b0c73dbae6a7.jpg", "hero": "assets/0bdf9390c478be673e72b0c73dbae6a7.jpg"}, {"name": "Luxury Gifts", "featured": true, "img": "assets/62af6e2ad348ef4deb2469647538c43e.jpg", "hero": "assets/62af6e2ad348ef4deb2469647538c43e.jpg"}, {"name": "Arabic Coffee & Dallah", "hero": "assets/b5e589b7b888c732e38714fb54ee10f6.jpg"}, {"name": "Beverages", "hero": "assets/0bdf9390c478be673e72b0c73dbae6a7.jpg"}, {"name": "Honey"}, {"name": "Incense", "hero": "assets/2168031f83cbb81ce211badcc6566d56.jpg"}, {"name": "Luxury Dates", "hero": "assets/4fe84d8fabde8fc82aecebe98e121c90.jpg"}, {"name": "Maamoul"}, {"name": "Nuts"}, {"name": "Oils"}, {"name": "Perfumes", "hero": "assets/2168031f83cbb81ce211badcc6566d56.jpg"}, {"name": "Prayer Rugs", "hero": "assets/e0eb246462e473ac196747bf8b4917ca.jpg"}, {"name": "Sidr"}];
      const products = P.map((r) => ({ id: r[0], name: r[1], cat: r[2], cents: r[3], img: IMG[r[4]], short: r[5], desc: r[6] }));
      const byId = {};
      products.forEach((p) => { byId[p.id] = p; });
      this._d = { products: products, byId: byId, cats: CATS };
    }
    return this._d;
  }
  money(c) { return 'EGP ' + (c / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  st() {
    const s = this.state || {};
    return {
      page: s.page || (this.props.startPage && this.props.startPage !== 'home' ? this.props.startPage : 'home'),
      cat: s.cat || '', pid: s.pid || 27976, info: s.info || 'privacy',
      cart: s.cart || {}, wish: s.wish || {}, qty: s.qty || 1, cq: s.cq || {},
      q: s.q || '', storeQ: s.storeQ || '', sort: s.sort || 'default',
      cartOpen: !!s.cartOpen, searchOpen: !!s.searchOpen, toast: s.toast || '', toastKind: s.toastKind || 'bag', toastIc: s.toastIc || 'check', toastTitle: s.toastTitle || '', toastSub: s.toastSub || '', toastX: s.toastX || null, justAdded: s.justAdded || 0, extras: s.extras || [], giftSize: s.giftSize || 4, giftPicks: s.giftPicks || [], giftNote: s.giftNote || '', giftTo: s.giftTo || '', giftFrom: s.giftFrom || '', gcDesign: s.gcDesign || 0, gcAmt: s.gcAmt == null ? 10000 : s.gcAmt, gcTo: s.gcTo || '', gcFrom: s.gcFrom || '', gcMsg: s.gcMsg || '', ckStep: s.ckStep || 0, ship: s.ship || 'std', fStock: !!s.fStock, fTags: s.fTags || [], fPrice: s.fPrice || [], storeLoading: !!s.storeLoading, annOff: !!s.annOff, notified: s.notified || {}, recent: s.recent || [], qv: s.qv || 0, qvQty: s.qvQty || 1, storePg: s.storePg || 1, pgKey: s.pgKey || '', toastId: s.toastId || 0, toastN: s.toastN || 1,
      form: s.form || { name: '', phone: '', email: '', address: '', city: '', notes: '', pay: 'cod' }, formErr: s.formErr || '',
      order: s.order || null, orders: s.orders || [],
      joinPhone: s.joinPhone || '', joinErr: s.joinErr || '', joined: !!s.joined, joinCode: s.joinCode || 'sa',
      cform: s.cform || { name: '', email: '', subject: 'An order', message: '' }, contactErr: s.contactErr || '', contactSent: !!s.contactSent,
      auth: s.auth || { email: '', password: '', name: '', remail: '', rpassword: '' }, authErr: s.authErr || '', regErr: s.regErr || '', user: s.user || null,
      mode: s.mode || 'canvas', vh: s.vh || 900, past: !!s.past, catOff: s.catOff || 0, house: s.house == null ? -1 : s.house,
    };
  }
  componentDidMount() {
    this._raf = 0;
    this._onScroll = () => {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => { this._raf = 0; this.apply(); });
    };
    this._onResize = () => this.measure();
    window.addEventListener('scroll', this._onScroll, { passive: true });
    window.addEventListener('resize', this._onResize);
    this.measure();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll);
    window.removeEventListener('resize', this._onResize);
    if (this._raf) cancelAnimationFrame(this._raf);
    clearTimeout(this._tt);
  }
  componentDidUpdate() { this.apply(); }
  measure() {
    const h = window.innerHeight || 900;
    const mode = h > 1400 ? 'canvas' : 'play';
    const vh = mode === 'canvas' ? 900 : Math.max(620, h);
    const s = this.st();
    if (s.mode !== mode || s.vh !== vh) this.setState({ mode: mode, vh: vh });
    else this.apply();
  }
  apply() {
    const s = this.st();
    if (s.page !== 'home') return;
    const stages = document.querySelectorAll('[data-stage]');
    if (!stages.length) return;
    if (s.mode === 'canvas') { this.paint(stages[0], 0.03); return; }
    const tr = document.querySelector('[data-track]');
    if (!tr) return;
    const r = tr.getBoundingClientRect();
    this.paint(stages[0], Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - s.vh))));
    const past = r.bottom <= 90;
    if (past !== s.past) this.setState({ past: past });
  }
  paint(s, p) {
    const c = (x) => Math.min(1, Math.max(0, x));
    const seg = (a, b) => c((p - a) / (b - a));
    const e = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const set = (k, fn) => { const el = s.querySelector('[data-k="' + k + '"]'); if (el) fn(el.style); };
    const inout = (a, b, cc, d) => Math.min(e(seg(a, b)), 1 - e(seg(cc, d)));
    const cam = e(seg(0, 0.55));
    const zoom = 1.7 - 0.62 * cam - 0.08 * e(seg(0.55, 1));
    set('photo', (st) => { st.transformOrigin = (50 - 12 * cam) + '% ' + (58 * cam) + '%'; st.transform = 'scale(' + zoom + ')'; });
    set('haze', (st) => { st.opacity = String(1 - e(seg(0.08, 0.4))); });
    set('sun', (st) => { st.opacity = String(1 - e(seg(0.1, 0.45))); st.transform = 'translateX(-50%) translateY(' + (-cam * 160) + 'px)'; });
    const dim = e(seg(0.22, 0.42));
    const dark = e(seg(0.66, 0.8));
    set('dim', (st) => { st.opacity = String(dim); });
    set('olive', (st) => { st.opacity = String(0.9 * dark); });
    const pass = e(seg(0.05, 0.5));
    set('palmL', (st) => { st.transform = 'translateX(' + (-pass * 220) + 'px) scale(' + (1 + 0.28 * pass) + ')'; });
    set('palmR', (st) => { st.transform = 'translateX(' + (pass * 240) + 'px) scale(' + (1 + 0.3 * pass) + ')'; });
    const rise = e(seg(0.5, 0.64));
    const turns = this.props.turns != null ? this.props.turns : 1.1;
    // same spin as before, but anchored so it lands on the grooved side view (frame 2) and holds through the finale
    // spins at a steady speed, then glides (decelerates smoothly) into the end frame instead of stopping abruptly
    const END_FRAME = 2, P0 = 0.45, HOLD = 0.9, U0 = 0.55;
    const total = (HOLD - P0) * 2 * turns * 60;
    const u = Math.min(1, Math.max(0, (p - P0) / (HOLD - P0)));
    const v = 2 / (1 + U0);
    const g = u < U0 ? v * u : v * u - v * (u - U0) * (u - U0) / (2 * (1 - U0));
    const f = (((END_FRAME - Math.round((1 - g) * total)) % 60) + 60) % 60;
    set('date', (st) => { st.backgroundPosition = ((f % 10) / 9 * 100) + '% ' + (Math.floor(f / 10) / 5 * 100) + '%'; });
    set('datewrap', (st) => { st.opacity = String(rise); st.transform = 'translate(-50%,-50%) translateY(' + ((1 - rise) * 220 + Math.sin(p * Math.PI * 6) * 5) + 'px) scale(' + (0.8 + 0.2 * rise) + ')'; });
    set('glow', (st) => { st.opacity = String(rise * (0.7 + 0.3 * dark)); });
    const it = 1 - e(seg(0.14, 0.24));
    set('introFade', (st) => { st.opacity = String(1 - e(seg(0.04, 0.3))); });
    set('intro', (st) => { st.opacity = String(it); st.transform = 'translateY(' + (-(1 - it) * 40 - cam * 30) + 'px)'; });
    const c2 = inout(0.28, 0.36, 0.46, 0.52);
    set('ch2', (st) => { st.opacity = String(c2); st.transform = 'translateY(' + ((1 - e(seg(0.28, 0.36))) * 30) + 'px)'; });
    const c3 = inout(0.54, 0.6, 0.66, 0.72);
    set('ch3', (st) => { st.opacity = String(c3); st.transform = 'translateY(-50%) translateX(' + ((1 - e(seg(0.54, 0.6))) * -40) + 'px)'; });
    const fin = e(seg(0.76, 0.86));
    set('finale', (st) => { st.opacity = String(fin); st.transform = 'translateY(-50%) translateY(' + ((1 - fin) * 30) + 'px)'; st.pointerEvents = fin > 0.5 ? 'auto' : 'none'; });
    set('cue', (st) => { st.opacity = String(1 - seg(0, 0.05)); });
    const light = Math.max(dim, dark);
    const mix = (a, b, t) => 'rgb(' + a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',') + ')';
    const col = mix([31, 46, 38], [247, 239, 229], light);
    set('hdr', (st) => { st.color = col; });
    set('rail', (st) => { st.color = col; st.opacity = String(e(Math.min(1, Math.max(0, (light - 0.35) / 0.55)))); st.pointerEvents = light > 0.5 ? 'auto' : 'none'; });
    set('logoDark', (st) => { st.opacity = String(1 - light); });
    set('logoLight', (st) => { st.opacity = String(light); });
    const active = p < 0.24 ? 0 : p < 0.52 ? 1 : p < 0.74 ? 2 : 3;
    for (let i = 0; i < 4; i++) set('t' + i, (st) => { st.opacity = i === active ? '1' : '0.4'; });
  }
  nav(patch) {
    this.setState(Object.assign({ cartOpen: false, searchOpen: false, past: false }, patch), () => { try { window.scrollTo(0, 0); } catch (err) {} });
  }
  catStep(d) {
    const n = this.data().cats.length, maxOff = Math.ceil(Math.max(0, n * 249 - 20 - 1360) / 249);
    const off = Math.min(Math.max((this.state && this.state.catOff) || 0, 0), maxOff);
    const next = Math.min(maxOff, Math.max(0, off + d));
    if (next !== off) this.setState({ catOff: next });
  }
  flags() { return { fresh: [27990, 28008, 28021], best: [27976, 27966, 27982], low: { 27981: 3, 27955: 2 }, sold: [28022, 27874] }; }
  addToCart(id, n) {
    const s = this.st();
    const cart = Object.assign({}, s.cart);
    cart[id] = (cart[id] || 0) + n;
    const p = this.data().byId[id];
    this.setState({ cart: cart, toast: (n > 1 ? n + ' × ' : '') + p.name + ' added to your bag', toastKind: 'bag', toastX: null, toastId: id, toastN: n, justAdded: id });
    clearTimeout(this._tt); clearTimeout(this._ta);
    this._ta = setTimeout(() => this.setState({ justAdded: 0 }), 1800);
    this._tt = setTimeout(() => this.setState({ toast: '' }), 4000);
  }
  setQty(id, n) {
    const cart = Object.assign({}, this.st().cart);
    if (n <= 0) delete cart[id]; else cart[id] = n;
    this.setState({ cart: cart });
  }
  toggleWish(id) {
    const wish = Object.assign({}, this.st().wish);
    const adding = !wish[id];
    if (wish[id]) delete wish[id]; else wish[id] = true;
    this.setState(adding ? { wish: wish, toast: 'wish', toastKind: 'msg', toastTitle: 'Saved to your wishlist', toastSub: this.data().byId[id].name, toastIc: 'heart' } : { wish: wish });
    if (adding) { clearTimeout(this._tt); this._tt = setTimeout(() => this.setState({ toast: '' }), 3200); }
  }
  msg(title, sub, icon) {
    this.setState({ toast: 'msg', toastKind: 'msg', toastTitle: title, toastSub: sub, toastIc: icon || 'check' });
    clearTimeout(this._tt); this._tt = setTimeout(() => this.setState({ toast: '' }), 3600);
  }
  renderVals() {
    const s = this.st();
    const d = this.data();
    const pv = (fn) => (e) => { if (e && e.preventDefault) e.preventDefault(); fn(e); };
    const go = {};
    ['home', 'store', 'about', 'contact', 'account', 'wishlist', 'checkout', 'gift', 'giftcard', 'notfound'].forEach((pg) => { go[pg] = pv(() => this.nav({ page: pg, cat: pg === 'store' ? '' : s.cat, house: pg === 'store' ? -1 : s.house, formErr: '' })); });
    ['privacy', 'returns', 'terms', 'news', 'sitemap'].forEach((k) => { go[k] = pv(() => this.nav({ page: 'info', info: k })); });
    const goCat = (name) => pv(() => this.nav({ page: 'store', cat: name, storeQ: '' }));
    const openP = (id) => pv(() => this.nav({ page: 'product', pid: id, qty: 1, searchOpen: false, recent: [id].concat((s.recent || []).filter((x) => x !== id)).slice(0, 4) }));
    const card = (p) => ({
      id: p.id, name: p.name, cat: p.cat, img: p.img, priceText: this.money(p.cents),
      open: openP(p.id), quick: pv(() => this.setState({ qv: p.id, qvQty: 1 })), n: s.cq[p.id] || 1, add: pv(() => { this.addToCart(p.id, s.cq[p.id] || 1); this.setState({ cq: Object.assign({}, s.cq, { [p.id]: 1 }) }); }),
      dec: pv(() => this.setState({ cq: Object.assign({}, s.cq, { [p.id]: Math.max(1, (s.cq[p.id] || 1) - 1) }) })), inc: pv(() => this.setState({ cq: Object.assign({}, s.cq, { [p.id]: Math.min(20, (s.cq[p.id] || 1) + 1) }) })),
      ...(() => { const F = this.flags(); const sold = F.sold.indexOf(p.id) >= 0; const low = F.low[p.id]; const b = sold ? ['Sold out', '#1F2E26', '#F7EFE5'] : F.fresh.indexOf(p.id) >= 0 ? ['New harvest', '#6E7059', '#F7EFE5'] : F.best.indexOf(p.id) >= 0 ? ['Bestseller', '#F7EFE5', '#6D2C26'] : low ? ['Only ' + low + ' left', '#F7EFE5', '#6D2C26'] : null; const added = s.justAdded === p.id; const notified = !!s.notified[p.id];
        return { sold: sold, hasBadge: !!b, badge: b ? b[0] : '', badgeBg: b ? b[1] : 'transparent', badgeFg: b ? b[2] : 'inherit', imgFilter: sold ? 'grayscale(.55) opacity(.82)' : 'none',
          cta: sold ? pv(() => { this.setState({ notified: Object.assign({}, s.notified, { [p.id]: true }) }); this.msg('We’ll let you know', 'You’ll get a WhatsApp message when ' + p.name + ' is back.', 'bell'); }) : pv(() => { this.addToCart(p.id, s.cq[p.id] || 1); this.setState({ cq: Object.assign({}, s.cq, { [p.id]: 1 }) }); }),
          ctaText: sold ? (notified ? 'We’ll notify you' : 'Notify me') : added ? 'Added' : 'Add to bag', ctaBg: sold ? 'transparent' : added ? '#393723' : '#6E7059', ctaFg: sold ? '#1F2E26' : '#F7EFE5', ctaBd: sold ? 'inset 0 1px 0 #D9C9B7' : 'none',
          icBag: !sold && !added, icBell: sold && !notified, icCheck: added || (sold && notified), ctaCls: sold ? 'ghost' : (added ? 'done' : '') }; })(),
      toggleWish: pv(() => this.toggleWish(p.id)), heart: s.wish[p.id] ? '♥' : '♡',
      wishLabel: s.wish[p.id] ? 'Remove ' + p.name + ' from wishlist' : 'Save ' + p.name + ' to wishlist', goCat: goCat(p.cat),
    });
    const catPages = Math.ceil(d.cats.length / 6), catPg = ((s.catOff || 0) % catPages + catPages) % catPages;
    const count = {};
    d.products.forEach((p) => { count[p.cat] = (count[p.cat] || 0) + 1; });
    const catsSorted = d.cats.map((c) => c.name);

    // cart
    const cartIds = Object.keys(s.cart);
    let total = 0; let n = 0;
    const cartItems = cartIds.map((k) => {
      const p = d.byId[k]; const q = s.cart[k]; total += p.cents * q; n += q;
      return { name: p.name, img: p.img, qty: q, priceText: this.money(p.cents), lineText: this.money(p.cents * q), open: openP(p.id), note: '', hasNote: false,
        inc: pv(() => this.setQty(p.id, q + 1)), dec: pv(() => this.setQty(p.id, q - 1)), remove: pv(() => this.setQty(p.id, 0)) };
    }).concat((s.extras || []).map((x, xi) => {
      total += x.cents * x.qty; n += x.qty;
      const setX = (q) => pv(() => { const ex = (s.extras || []).slice(); if (q <= 0) ex.splice(xi, 1); else ex[xi] = Object.assign({}, x, { qty: q }); this.setState({ extras: ex }); });
      return { name: x.name, img: x.img, qty: x.qty, priceText: this.money(x.cents), lineText: this.money(x.cents * x.qty), open: pv(() => {}), note: x.meta || '', hasNote: !!x.meta, inc: setX(x.qty + 1), dec: setX(x.qty - 1), remove: setX(0) };
    }));

    // store
    let list = d.products.slice();
    const HOUSES = [['Dates & Sweets', ['Dates', 'Luxury Dates', 'Maamoul', 'Nuts']], ['Coffee & Infusions', ['Arabic Coffee & Dallah', 'Beverages', 'Honey']], ['Scent', ['Fragrances', 'Perfumes', 'Incense']], ['Prayer & Spirit', ['Spiritual', 'Prayer Beads', 'Prayer Rugs']], ['Madinah Apothecary', ['Madinah Herbs', 'Sidr', 'Oils']], ['Gifts', ['Luxury Gifts']]];
    const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    const DDIMG = ['assets/4fe84d8fabde8fc82aecebe98e121c90.jpg', 'assets/b5e589b7b888c732e38714fb54ee10f6.jpg', 'assets/2168031f83cbb81ce211badcc6566d56.jpg', 'assets/38c88e347c9dc1ee8cb0a2dcc8424c5b.jpg', 'assets/0bdf9390c478be673e72b0c73dbae6a7.jpg', 'assets/62af6e2ad348ef4deb2469647538c43e.jpg'];
    const ddH = (this.state && this.state.ddH) || 0;
    let hIdx = s.cat ? HOUSES.findIndex((h) => h[1].indexOf(s.cat) >= 0) : s.house;
    if (hIdx == null) hIdx = -1;
    if (s.cat) list = list.filter((p) => p.cat === s.cat);
    else if (hIdx >= 0) list = list.filter((p) => HOUSES[hIdx][1].indexOf(p.cat) >= 0);
    if (s.storeQ.trim()) { const t = s.storeQ.trim().toLowerCase(); list = list.filter((p) => (p.name + ' ' + p.cat + ' ' + p.short).toLowerCase().indexOf(t) >= 0); }
    const FL = this.flags(); const baseList = list.slice();
    const tagOf = { fresh: (p) => FL.fresh.indexOf(p.id) >= 0, best: (p) => FL.best.indexOf(p.id) >= 0 };
    const priceOf = { u50: (p) => p.cents < 5000, o50: (p) => p.cents >= 5000 };
    if (s.fStock) list = list.filter((p) => FL.sold.indexOf(p.id) < 0);
    if (s.fTags.length) list = list.filter((p) => s.fTags.some((t) => tagOf[t](p)));
    if (s.fPrice.length) list = list.filter((p) => s.fPrice.some((t) => priceOf[t](p)));
    const togl = (key, v) => pv(() => { const cur = s[key] || []; this.setState({ [key]: cur.indexOf(v) >= 0 ? cur.filter((x) => x !== v) : cur.concat([v]) }); });
    const opt = (name, on, toggle, n) => ({ name: name, on: on ? 'true' : 'false', bg: on ? '#6E7059' : 'transparent', bd: on ? '#6E7059' : '#C8B098', toggle: toggle, n: String(n) });
    const fStockOpts = [opt('In stock only', s.fStock, pv(() => this.setState({ fStock: !s.fStock })), baseList.filter((p) => FL.sold.indexOf(p.id) < 0).length)];
    const fTagOpts = [['fresh', 'New harvest'], ['best', 'Bestsellers']].map((t) => opt(t[1], s.fTags.indexOf(t[0]) >= 0, togl('fTags', t[0]), baseList.filter(tagOf[t[0]]).length));
    const fPriceOpts = [['u50', 'Under EGP 50'], ['o50', 'EGP 50 and above']].map((t) => opt(t[1], s.fPrice.indexOf(t[0]) >= 0, togl('fPrice', t[0]), baseList.filter(priceOf[t[0]]).length));
    const fChips = [].concat(s.fStock ? [{ name: 'In stock', off: pv(() => this.setState({ fStock: false })) }] : [], s.fTags.map((t) => ({ name: t === 'fresh' ? 'New harvest' : 'Bestsellers', off: togl('fTags', t) })), s.fPrice.map((t) => ({ name: t === 'u50' ? 'Under EGP 50' : 'EGP 50 and above', off: togl('fPrice', t) })));
    if (s.sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    if (s.sort === 'za') list.sort((a, b) => b.name.localeCompare(a.name));
    if (s.sort === 'low') list.sort((a, b) => a.cents - b.cents);
    if (s.sort === 'high') list.sort((a, b) => b.cents - a.cents);
    const catInfo = d.cats.filter((c) => c.name === s.cat)[0];

    // search
    const qt = s.q.trim().toLowerCase();
    const results = qt ? d.products.filter((p) => (p.name + ' ' + p.cat + ' ' + p.short).toLowerCase().indexOf(qt) >= 0) : [];

    // product
    const pp = d.byId[s.pid] || d.products[0];
    let rel = d.products.filter((p) => p.cat === pp.cat && p.id !== pp.id);
    if (rel.length < 4) rel = rel.concat(d.products.filter((p) => p.cat !== pp.cat && p.id !== pp.id).slice(0, 4 - rel.length));

    // forms
    const setIn = (key, field) => (e) => { const o = Object.assign({}, this.st()[key]); o[field] = e.target.value; const patch = {}; patch[key] = o; this.setState(patch); };
    const setF = {}; ['name', 'phone', 'email', 'address', 'city', 'notes'].forEach((f) => { setF[f] = setIn('form', f); });
    const setC = {}; ['name', 'email', 'subject', 'message'].forEach((f) => { setC[f] = setIn('cform', f); });
    const setA = {}; ['email', 'password', 'name', 'remail', 'rpassword'].forEach((f) => { setA[f] = setIn('auth', f); });
    const emailOk = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
    const phoneOk = (v) => v.replace(/[^0-9]/g, '').length >= 9;
    const payText = (k) => (k === 'card' ? 'Paid online' : 'Cash on delivery');

    const info = {
      privacy: { title: 'Privacy Policy', paras: ['IRTH collects only the details needed to deliver your order and keep you informed: your name, phone, email and delivery address.', '[Full privacy policy to be supplied by IRTH.]'] },
      returns: { title: 'Returns', paras: ['Return products within 21 days of delivery.', 'To start a return, contact us by phone, WhatsApp or email with your order number.', '[Full returns conditions to be supplied by IRTH.]'] },
      terms: { title: 'Terms & Conditions', paras: ['[Terms & conditions to be supplied by IRTH.]'] },
      news: { title: 'Latest News', paras: ['IRTH is now officially open. Welcome.', '[Journal entries to be supplied by IRTH.]'] },
      sitemap: { title: 'Our Sitemap', paras: [], links: [['Home', go.home], ['Store', go.store], ['About IRTH', go.about], ['Contact Us', go.contact], ['My account', go.account], ['Wishlist', go.wishlist], ['Privacy Policy', go.privacy], ['Returns', go.returns], ['Terms & Conditions', go.terms], ['Latest News', go.news]] },
    }[s.info];

    const canvas = s.mode === 'canvas';
    const isHome = s.page === 'home';
    const labels = [['Home', 'home'], ['Store', 'store'], ['Gifting', 'gift'], ['About IRTH', 'about'], ['Contact Us', 'contact']];
    const houseOf = (cat) => HOUSES.findIndex((h) => h[1].indexOf(cat) >= 0);
    const inCart = (id) => !!s.cart[id];
    const xsHouses = cartIds.map((k) => houseOf(d.byId[k].cat)).filter((i) => i >= 0);
    const xsPool = d.products.filter((x) => !inCart(x.id) && xsHouses.indexOf(houseOf(x.cat)) >= 0).concat([27976, 27966, 27982, 27981, 27990, 28008].map((id) => d.byId[id]).filter((x) => x && !inCart(x.id)));
    const xsSeen = {}; const crossSell = xsPool.filter((x) => (xsSeen[x.id] ? false : (xsSeen[x.id] = true))).slice(0, 3).map((x) => ({ name: x.name, img: x.img, priceText: this.money(x.cents), open: openP(x.id), add: pv(() => this.addToCart(x.id, 1)) }));
    const qvP = s.qv ? d.byId[s.qv] : null;
    const quickView = qvP ? Object.assign(card(qvP), { desc: qvP.short || qvP.desc, qty: s.qvQty || 1, dec: pv(() => this.setState({ qvQty: Math.max(1, (s.qvQty || 1) - 1) })), inc: pv(() => this.setState({ qvQty: Math.min(20, (s.qvQty || 1) + 1) })), addQv: pv(() => { this.addToCart(qvP.id, s.qvQty || 1); this.setState({ qv: 0 }); }), details: pv(() => { this.setState({ qv: 0 }); this.nav({ page: 'product', pid: qvP.id, qty: 1 }); }) }) : { img: '', name: '', cat: '', priceText: '', desc: '', qty: 1 };
    const pager = (() => { const per = 12, tot = Math.max(1, Math.ceil(list.length / per)), key = [s.cat, s.house, s.storeQ, s.sort, s.fStock, s.fTags.join(','), s.fPrice.join(',')].join('|'), cur = s.pgKey === key ? Math.min(Math.max(s.storePg || 1, 1), tot) : 1; const goPg = (n) => pv(() => { if (n < 1 || n > tot || n === cur) return; clearTimeout(this._sl); this._sl = setTimeout(() => this.setState({ storeLoading: false }), 450); this.setState({ storePg: n, pgKey: key, storeLoading: true }, () => { try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (err) {} }); }); return { show: tot > 1, cur, total: tot, range: 'Products ' + (list.length ? (cur - 1) * per + 1 : 0) + '–' + Math.min(cur * per, list.length) + ' of ' + list.length, prev: goPg(cur - 1), next: goPg(cur + 1), prevOp: cur > 1 ? '1' : '0.35', nextOp: cur < tot ? '1' : '0.35', pages: Array.from({ length: tot }, (_, i) => ({ n: i + 1, cur: i + 1 === cur ? 'page' : 'false', bg: i + 1 === cur ? '#1F2E26' : 'transparent', fg: i + 1 === cur ? '#F7EFE5' : '#1F2E26', go: goPg(i + 1) })), slice: list.slice((cur - 1) * per, cur * per) }; })();
    return {
      deep: this.props.deep ?? '#6E7059',
      fDisplay: "'Marcellus', Georgia, serif",
      fSerif: ({ bodoni: "'Bodoni Moda', Didot, serif", playfair: "'Playfair Display', Didot, serif", cormorant: "'Cormorant Garamond', Georgia, serif", original: "'EB Garamond', Georgia, serif", dmserif: "'DM Serif Display', Georgia, serif", instrument: "'Instrument Serif', Georgia, serif", fraunces: "'Fraunces', Georgia, serif", baskerville: "'Libre Baskerville', Georgia, serif", caslon: "'Libre Caslon Text', Georgia, serif", spectral: "'Spectral', Georgia, serif", gloock: "'Gloock', Georgia, serif", cinzel: "'Cinzel', Georgia, serif" })[this.props.heroFont || 'bodoni'] || "'Bodoni Moda', Didot, serif",
      go: go, goDates: goCat('Dates'), goBeads: goCat('Prayer Beads'),
      toMembership: pv(() => { const el = document.getElementById('membership'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }),
      catTotal: d.products.length,
      homeSeals: (() => { const o = {}; HOUSES.forEach((h, i) => { const n = h[1].reduce((a, c) => a + (count[c] || 0), 0); o['h' + i] = { roman: ROMAN[i], name: h[0], countText: n + (n === 1 ? ' piece' : ' pieces'), go: pv(() => this.nav({ page: 'store', cat: '', house: i, storeQ: '' })), cats: h[1].map((c) => ({ name: c, go: pv(() => this.nav({ page: 'store', cat: c, house: i, storeQ: '' })) })) }; }); return o; })(),
      ddFeatured: card(d.byId[27976]),
      homeHouses: HOUSES.map((h, i) => ({ name: h[0], img: DDIMG[i], go: pv(() => this.nav({ page: 'store', cat: '', house: i, storeQ: '' })) })),
      megaHouses: HOUSES.map((h, i) => ({ roman: ROMAN[i], name: h[0], img: DDIMG[i], cats: h[1].map((c) => ({ name: c, countText: String(count[c] || 0).padStart(2, '0'), go: pv(() => this.nav({ page: 'store', cat: c, house: i, storeQ: '' })) })).concat(i === 5 ? [{ name: 'Gift cards', countText: '', go: pv(() => this.nav({ page: 'giftcard' })) }] : []), bg: i === ddH ? '#E8DACD' : 'transparent', fg: i === ddH ? '#6D2C26' : '#1F2E26', arrow: i === ddH ? '1' : '0', hover: () => { if (this.state.ddH !== i) this.setState({ ddH: i }); }, go: pv(() => this.nav({ page: 'store', cat: '', house: i, storeQ: '' })) })),
      ddHouse: (() => { const h = HOUSES[ddH]; const n = h[1].reduce((a, c) => a + (count[c] || 0), 0); return { roman: ROMAN[ddH], name: h[0], img: DDIMG[ddH], caption: n + (n === 1 ? ' piece' : ' pieces') + ', hand-selected in Madinah', go: pv(() => this.nav({ page: 'store', cat: '', house: ddH, storeQ: '' })), cats: h[1].map((c) => ({ name: c, countText: (count[c] || 0) + ((count[c] || 0) === 1 ? ' piece' : ' pieces'), go: pv(() => this.nav({ page: 'store', cat: c, house: ddH, storeQ: '' })) })) }; })(),
      navItems: labels.map((l) => ({ label: l[0], go: go[l[1]], isStore: l[1] === 'store', border: s.page === l[1] ? '1px solid #1F2E26' : '1px solid transparent', heroBorder: s.page === l[1] ? '1px solid currentColor' : '1px solid transparent' })),
      hdrOpacity: isHome && !s.past ? 0 : 1, hdrPointer: isHome && !s.past ? 'none' : 'auto', hdrShift: isHome && !s.past ? -20 : 0,
      accountLabel: s.user ? 'Hi, ' + s.user.first : 'Account',
      memberSince: 'Member since September 2026', tierHint: Math.max(0, 3 - (s.orders || []).length) > 0 ? Math.max(0, 3 - (s.orders || []).length) + ' orders to Gold Reserve' : 'Gold Reserve reached', tierPct: Math.min(100, ((s.orders || []).length / 3) * 100) + '%',
      wishCount: Object.keys(s.wish).length, cartCount: n, wishHas: Object.keys(s.wish).length > 0, cartHas: n > 0, cartTotalText: this.money(total),
      openCart: pv(() => this.setState({ cartOpen: true, searchOpen: false, toast: '' })), closeCart: pv(() => this.setState({ cartOpen: false })),
      openSearch: pv(() => this.setState({ searchOpen: true, cartOpen: false })), closeSearch: pv(() => this.setState({ searchOpen: false })),
      cartOpen: s.cartOpen, searchOpen: s.searchOpen, cartItems: cartItems, cartEmpty: cartItems.length === 0, cartHas: cartItems.length > 0,
      annOn: !s.annOff, annTop: s.annOff ? 0 : 36, closeAnn: pv(() => this.setState({ annOff: true })),
      toastOn: !!s.toast, toastBag: !!s.toast && s.toastKind === 'bag' && (!!d.byId[s.toastId] || !!s.toastX), toastMsg: !!s.toast && s.toastKind === 'msg', toastText: s.toast, toastTitle: s.toastTitle, toastSub: s.toastSub, toastIcon: { check: s.toastIc === 'check', heart: s.toastIc === 'heart', bell: s.toastIc === 'bell', gift: s.toastIc === 'gift' },
      toastP: (() => { if (s.toastX) return s.toastX; const p = d.byId[s.toastId]; if (!p) return { img: '', name: '', meta: '' }; return { img: p.img, name: p.name, meta: 'Qty ' + s.toastN + ' · ' + this.money(p.cents * s.toastN) }; })(),
      closeToast: pv(() => this.setState({ toast: '' })),
      q: s.q, setQ: (e) => this.setState({ q: e.target.value }),
      noQuery: !qt, hasQuery: !!qt,
      recentItems: (s.recent || []).map((id) => d.byId[id]).filter(Boolean).map(card),
      rvItems: (s.recent || []).filter((id) => id !== s.pid).map((id) => d.byId[id]).filter(Boolean).map(card), rvHas: (s.recent || []).filter((id) => id !== s.pid).length > 0, recentHas: (s.recent || []).length > 0, clearRecent: pv(() => this.setState({ recent: [] })),
      searchSuggest: [27976, 27982, 27990, 28008].map((id) => d.byId[id]).filter(Boolean).map(card),
      searchTop: results.slice(0, 8).map(card), searchMore: results.length > 8, searchNone: !!qt && results.length === 0,
      searchAll: pv(() => this.nav({ page: 'store', cat: '', house: -1, storeQ: s.q, searchOpen: false })),
      searchKey: (e) => { if (!e) return; if (e.key === 'Escape') this.setState({ searchOpen: false }); else if (e.key === 'Enter' && qt) this.nav({ page: 'store', cat: '', house: -1, storeQ: s.q, searchOpen: false }); },
      topSellers: [27976, 27966, 28015, 27982, 27990, 27981].map((id) => card(d.byId[id])),
      quickSearches: ['Dates', 'Saffron', 'Arabic coffee', 'Prayer beads', 'Oud', 'Honey'].map((w) => ({ label: w, go: pv(() => this.setState({ q: w })) })),
      searchResults: results.map(card), searchCountText: qt ? results.length + ' result' + (results.length === 1 ? '' : 's') : 'Type to search ' + d.products.length + ' products, or start with our top sellers',

      isHome: isHome, isInner: !isHome, isStore: s.page === 'store', isProduct: s.page === 'product', isCheckout: s.page === 'checkout',
      isDone: s.page === 'done', isWishlist: s.page === 'wishlist', isAbout: s.page === 'about', isContact: s.page === 'contact',
      isGift: s.page === 'gift', isGiftCard: s.page === 'giftcard', isAccount: s.page === 'account', isInfo: s.page === 'info', isNotFound: s.page === 'notfound',
      rootH: isHome && canvas ? '7406px' : 'auto',
      stages: [{ i: 0, tag: 'Home · hero at scroll 0%, press Play to scroll the site', showTag: canvas, border: '0' }],
      stageH: s.vh, stagePos: canvas ? 'relative' : 'sticky', trackH: canvas ? s.vh : s.vh * 5,

      catCount: d.cats.length,
      catSlide: (() => { const n = d.cats.length, step = 249, vis = 1360, maxT = Math.max(0, n * step - 20 - vis), maxOff = Math.ceil(maxT / step), off = Math.min(Math.max(s.catOff || 0, 0), maxOff), t = Math.min(off * step, maxT), frac = Math.min(1, vis / (n * step - 20)); return { prevOp: off > 0 ? '1' : '0.35', nextOp: off < maxOff ? '1' : '0.35', x: '-' + t + 'px', barW: (frac * 100).toFixed(2) + '%', barL: (maxT ? (t / maxT) * (1 - frac) * 100 : 0).toFixed(2) + '%', off, maxOff }; })(),
      catWheel: (e) => { if (!e || Math.abs(e.deltaX || 0) <= Math.abs(e.deltaY || 0)) return; if (e.cancelable && e.preventDefault) e.preventDefault(); this._cw = (this._cw || 0) + e.deltaX; if (Math.abs(this._cw) >= 90) { const dir = this._cw > 0 ? 1 : -1; this._cw = 0; this.catStep(dir); } },
      catKey: (e) => { if (!e) return; if (e.key === 'ArrowRight') { e.preventDefault && e.preventDefault(); this.catStep(1); } else if (e.key === 'ArrowLeft') { e.preventDefault && e.preventDefault(); this.catStep(-1); } },
      catTouchStart: (e) => { const t = e && e.touches && e.touches[0]; this._tx = t ? t.clientX : null; },
      catTouchEnd: (e) => { const t = e && e.changedTouches && e.changedTouches[0]; if (this._tx == null || !t) return; const dx = t.clientX - this._tx; this._tx = null; if (Math.abs(dx) > 40) this.catStep(dx < 0 ? 2 : -2); },
      catPrev: () => { const n = d.cats.length, maxOff = Math.ceil(Math.max(0, n * 249 - 20 - 1360) / 249), off = Math.min(s.catOff || 0, maxOff); this.setState({ catOff: Math.max(0, off - 2) }); },
      catNext: () => { const n = d.cats.length, maxOff = Math.ceil(Math.max(0, n * 249 - 20 - 1360) / 249), off = Math.min(s.catOff || 0, maxOff); this.setState({ catOff: Math.min(maxOff, off + 2) }); },
      featuredCats: d.cats.map((c) => ({ name: c.name, img: c.img || c.hero || ((d.products.find((x) => x.cat === c.name) || {}).img), go: goCat(c.name), countText: (count[c.name] || 0) + ((count[c.name] || 0) === 1 ? ' product' : ' products') })),
      otherCats: d.cats.filter((c) => !c.featured).map((c) => ({ name: c.name, go: goCat(c.name) })),
      popular: [27976, 27966, 27982, 27981, 27990, 28008].map((id) => card(d.byId[id])),
      homeNew: [27859, 27874, 27869, 27866].map((id) => card(d.byId[id])),
      homeGift: [27876, 27863, 27988, 27955].map((id) => card(d.byId[id])),
      joinPhone: s.joinPhone, joinError: s.joinErr, joinOpen: !s.joined, joinDone: s.joined,
      setJoinPhone: (e) => this.setState({ joinPhone: e.target.value.replace(/[^0-9 ]/g, ''), joinErr: '' }),
      joinCodes: (() => { const mk = (k) => ({ on: s.joinCode === k ? 'true' : 'false', bg: s.joinCode === k ? '#E8DACD' : 'transparent', bd: s.joinCode === k ? '#6D2C26' : '#D9C9B7', pick: () => this.setState({ joinCode: k, joinErr: '' }) }); return { sa: mk('sa'), eg: mk('eg') }; })(),
      joinCodesD: (() => { const mk = (k) => ({ on: s.joinCode === k ? 'true' : 'false', bg: s.joinCode === k ? '#E8DACD' : 'transparent', bd: s.joinCode === k ? '#E8DACD' : 'rgba(232,218,205,0.45)', fg: s.joinCode === k ? '#1F2E26' : '#F7EFE5', pick: () => this.setState({ joinCode: k, joinErr: '' }) }); return { sa: mk('sa'), eg: mk('eg') }; })(),
      joinPlaceholder: s.joinCode === 'eg' ? '10 1234 5678' : '5X XXX XXXX',
      joinFull: (s.joinCode === 'eg' ? '+20 ' : '+966 ') + s.joinPhone.replace(/[^0-9]/g, '').replace(/^0+/, ''),
      submitJoin: pv(() => { const n = s.joinPhone.replace(/[^0-9]/g, '').replace(/^0+/, ''); const ok = s.joinCode === 'eg' ? /^1[0-9]{9}$/.test(n) : /^5[0-9]{8}$/.test(n); if (!ok) this.setState({ joinErr: s.joinCode === 'eg' ? 'Enter an Egyptian mobile number, e.g. 10 1234 5678.' : 'Enter a Saudi mobile number, e.g. 5X XXX XXXX.' }); else this.setState({ joined: true }); }),

      storeTitle: s.cat || (hIdx >= 0 ? HOUSES[hIdx][0] : 'Store'), crumbCat: s.cat ? ' / ' + s.cat : (hIdx >= 0 ? ' / ' + HOUSES[hIdx][0] : ''), storeHero: catInfo && catInfo.hero ? catInfo.hero : 'assets/533bbee40bc482a3196d15f54f8379a0.jpg',
      catChips: [{ name: 'All', count: d.products.length, go: goCat('') }].concat(catsSorted.map((nm) => ({ name: nm, count: count[nm] || 0, go: goCat(nm) }))).map((c) => {
        const on = (c.name === 'All' && !s.cat) || c.name === s.cat;
        return Object.assign(c, { bg: on ? (this.props.deep ?? '#6E7059') : 'transparent', fg: on ? '#F7EFE5' : '#1F2E26', bd: on ? (this.props.deep ?? '#6E7059') : '#D9C9B7' });
      }),
      seal: (() => { const o = {}; HOUSES.forEach((h, i) => { const on = i === hIdx; const n = h[1].reduce((a, c) => a + (count[c] || 0), 0); o['h' + i] = { name: h[0], countText: n + (n === 1 ? ' piece' : ' pieces'), on: on ? 'true' : 'false', bg: on ? '#E8DACD' : 'rgba(31,46,38,0.32)', fg: on ? '#1F2E26' : '#F7EFE5', ic: on ? '#6D2C26' : '#E8DACD', bd: on ? 'transparent' : 'rgba(232,218,205,0.5)', blur: on ? 'none' : 'blur(6px)', go: pv(() => this.nav({ page: 'store', cat: '', house: on ? -1 : i, storeQ: '' })) }; }); const allOn = hIdx < 0; o.all = { countText: d.products.length + ' pieces', on: allOn ? 'true' : 'false', bg: allOn ? '#E8DACD' : 'rgba(31,46,38,0.32)', fg: allOn ? '#1F2E26' : '#F7EFE5', ic: allOn ? '#6D2C26' : '#E8DACD', bd: allOn ? 'transparent' : 'rgba(232,218,205,0.5)', blur: allOn ? 'none' : 'blur(6px)', go: pv(() => this.nav({ page: 'store', cat: '', house: -1, storeQ: '' })) }; return o; })(),
      subCats: hIdx < 0 ? [{ name: 'All pieces', count: d.products.length, go: pv(() => {}), fg: '#6D2C26', bd: '#6D2C26' }] : [{ name: 'All ' + HOUSES[hIdx][0], count: HOUSES[hIdx][1].reduce((a, c) => a + (count[c] || 0), 0), go: pv(() => this.nav({ page: 'store', cat: '', house: hIdx, storeQ: '' })), fg: !s.cat ? '#6D2C26' : '#1F2E26', bd: !s.cat ? '#6D2C26' : 'transparent' }].concat(HOUSES[hIdx][1].map((c) => ({ name: c, count: count[c] || 0, go: pv(() => this.nav({ page: 'store', cat: c, house: hIdx, storeQ: '' })), fg: s.cat === c ? '#6D2C26' : '#1F2E26', bd: s.cat === c ? '#6D2C26' : 'transparent' }))),
      pager, storeItems: pager.slice.map(card), crossSell, xsHas: crossSell.length > 0 && cartIds.length > 0, quickView, qvOpen: !!qvP, closeQv: pv(() => this.setState({ qv: 0 })), qvKey: (e) => { if (e && e.key === 'Escape') this.setState({ qv: 0 }); },
      fStockOpts, fTagOpts, fPriceOpts, fChips, chipsHas: fChips.length > 0, clearFilters: pv(() => this.setState({ fStock: false, fTags: [], fPrice: [] })), clearAllStore: pv(() => this.setState({ fStock: false, fTags: [], fPrice: [], storeQ: '' })),
      storeLoading: !!s.storeLoading, storeReady: !s.storeLoading, skels: [1, 2, 3, 4, 5, 6, 7, 8], emptyTitle: s.storeQ.trim() ? 'Nothing matches “' + s.storeQ.trim() + '”' : 'No pieces match these filters',
      giftTileOn: (hIdx === 5 || s.cat === 'Luxury Gifts') && !s.storeQ.trim() && (s.storePg || 1) === 1,
      storeEmpty: list.length === 0, resultText: 'Showing ' + list.length + ' of ' + (s.cat ? (count[s.cat] || 0) : (hIdx >= 0 ? HOUSES[hIdx][1].reduce((a, c) => a + (count[c] || 0), 0) : d.products.length)) + ' products',
      storeQ: s.storeQ, setStoreQ: (e) => this.setState({ storeQ: e.target.value }), clearStoreQ: pv(() => this.setState({ storeQ: '' })),
      sort: s.sort, setSort: (e) => this.setState({ sort: e.target.value }),

      prod: Object.assign(card(pp), { short: pp.short, desc: pp.desc }), qty: s.qty,
      qtyUp: pv(() => this.setState({ qty: s.qty + 1 })), qtyDown: pv(() => this.setState({ qty: Math.max(1, s.qty - 1) })),
      addProd: pv(() => this.addToCart(pp.id, s.qty)),
      ...(() => { const sold = this.flags().sold.indexOf(pp.id) >= 0; const notified = !!s.notified[pp.id]; return { prodSold: sold, prodCtaText: sold ? (notified ? 'We’ll notify you' : 'Notify me when it returns') : 'Add to bag', prodCtaBg: sold ? 'transparent' : '#6E7059', prodCtaFg: '#1F2E26', prodCtaBd: sold ? 'inset 0 0 0 1px #1F2E26' : 'none', prodCta: sold ? pv(() => { this.setState({ notified: Object.assign({}, s.notified, { [pp.id]: true }) }); this.msg('We’ll let you know', 'You’ll get a WhatsApp message when ' + pp.name + ' is back.', 'bell'); }) : pv(() => this.addToCart(pp.id, s.qty)) }; })(),
      buyNow: pv(() => { const cart = Object.assign({}, s.cart); cart[pp.id] = (cart[pp.id] || 0) + s.qty; this.nav({ cart: cart, page: 'checkout' }); }),
      related: rel.slice(0, 4).map(card),

      form: s.form, setF: setF, formErr: !!s.formErr, formErrText: s.formErr,
      payCod: s.form.pay !== 'card', payCard: s.form.pay === 'card',
      payCodBd: s.form.pay !== 'card' ? '#1F2E26' : '#D9C9B7', payCardBd: s.form.pay === 'card' ? '#1F2E26' : '#D9C9B7',
      setPayCod: () => this.setState({ form: Object.assign({}, s.form, { pay: 'cod' }) }), setPayCard: () => this.setState({ form: Object.assign({}, s.form, { pay: 'card' }) }),
      giftSizes: [[4, 'The Madinah Box · 4 pieces', 5000], [6, 'The Grand Box · 6 pieces', 8000]].map((g) => ({ name: g[1], priceText: this.money(g[2]) + ' box', on: s.giftSize === g[0] ? 'true' : 'false', bg: s.giftSize === g[0] ? '#FBF6EF' : 'transparent', bd: s.giftSize === g[0] ? '#6E7059' : '#D9C9B7', pick: pv(() => this.setState({ giftSize: g[0], giftPicks: (s.giftPicks || []).slice(0, g[0]) })) })),
      giftSize: s.giftSize, giftPicked: (s.giftPicks || []).length,
      giftOptions: [27976, 27966, 27982, 27981, 28041, 28033, 27991, 27956].map((id) => d.byId[id]).filter(Boolean).map((p) => { const on = (s.giftPicks || []).indexOf(p.id) >= 0; const full = (s.giftPicks || []).length >= s.giftSize; return { name: p.name, img: p.img, on: on ? 'true' : 'false', off: !on, bd: on ? '#6E7059' : '#D9C9B7', btnBg: on ? '#6E7059' : 'transparent', btnFg: on ? '#F7EFE5' : '#6E7059', label: (on ? 'Remove ' : 'Add ') + p.name, toggle: pv(() => { const cur = (s.giftPicks || []).slice(); const i = cur.indexOf(p.id); if (i >= 0) cur.splice(i, 1); else { if (full) return; cur.push(p.id); } this.setState({ giftPicks: cur }); }) }; }),
      giftSlots: Array.from({ length: s.giftSize }, (_, i) => { const id = (s.giftPicks || [])[i]; const p = id ? d.byId[id] : null; return { has: !!p, empty: !p, img: p ? p.img : '', bg: p ? 'transparent' : '#E8DACD' }; }),
      giftBoxName: s.giftSize === 6 ? 'The Grand Box · 6 pieces' : 'The Madinah Box · 4 pieces',
      giftHint: (s.giftPicks || []).length >= s.giftSize ? 'Your box is complete. Add a note and it’s ready.' : (s.giftPicks || []).length + ' of ' + s.giftSize + ' chosen, pick ' + (s.giftSize - (s.giftPicks || []).length) + ' more.',
      giftBoxPrice: this.money(s.giftSize === 6 ? 8000 : 5000),
      giftItemsPrice: this.money((s.giftPicks || []).reduce((a, id) => a + ((d.byId[id] || {}).cents || 0), 0)),
      giftTotal: this.money((s.giftSize === 6 ? 8000 : 5000) + (s.giftPicks || []).reduce((a, id) => a + ((d.byId[id] || {}).cents || 0), 0)),
      giftTo: s.giftTo, giftFrom: s.giftFrom, giftNote: s.giftNote,
      setGiftTo: (e) => this.setState({ giftTo: e.target.value }), setGiftFrom: (e) => this.setState({ giftFrom: e.target.value }), setGiftNote: (e) => this.setState({ giftNote: e.target.value }),
      addGiftBox: pv(() => {
        const picks = (s.giftPicks || []); if (!picks.length) { this.msg('Your box is empty', 'Choose at least one piece to fill the box.', 'gift'); return; }
        const cents = (s.giftSize === 6 ? 8000 : 5000) + picks.reduce((a, id) => a + ((d.byId[id] || {}).cents || 0), 0);
        const name = (s.giftSize === 6 ? 'The Grand Box · ' : 'The Madinah Box · ') + picks.length + ' pieces';
        const meta = picks.map((id) => (d.byId[id] || {}).name).join(', ') + (s.giftTo ? ' · for ' + s.giftTo : '');
        const ex = (s.extras || []).concat([{ key: 'gift' + Date.now(), name: name, img: (d.byId[picks[0]] || {}).img, cents: cents, qty: 1, meta: meta }]);
        this.setState({ extras: ex, giftPicks: [], giftNote: '', giftTo: '', giftFrom: '', toast: 'bag', toastKind: 'bag', toastX: { img: (d.byId[picks[0]] || {}).img, name: name, meta: 'Qty 1 · ' + this.money(cents) }, toastId: 0 });
        clearTimeout(this._tt); this._tt = setTimeout(() => this.setState({ toast: '' }), 4000);
      }),
      gcDesigns: [['#6E7059', '#F7EFE5', 'Olive', 10000], ['#1F2E26', '#E8DACD', 'Ink', 25000], ['#6D2C26', '#E8DACD', 'Maroon', 50000], ['#E8DACD', '#1F2E26', 'Sand', 100000]].map((g, i) => ({ bg: g[0], fg: g[1], amtText: this.money(g[3]), label: g[2] + ' gift card · ' + this.money(g[3]), logo: i === 3 ? 'assets/6bce5d7771043882a11c78312ae3b4bb.png' : 'assets/b086fa6a47e4bc2a1540b35c9e94a042.png', on: s.gcDesign === i ? 'true' : 'false', ring: s.gcDesign === i ? '0 0 0 2px #F7EFE5, 0 0 0 4px #6E7059' : '0 20px 40px -24px rgba(0,0,0,.5)', pick: pv(() => this.setState({ gcDesign: i, gcAmt: g[3] })) })),
      gcAmounts: [10000, 25000, 50000, 100000].map((a, i) => ({ label: this.money(a), on: s.gcAmt === a ? 'true' : 'false', bg: s.gcAmt === a ? '#FBF6EF' : 'transparent', bd: s.gcAmt === a ? '#6E7059' : '#C8B098', pick: pv(() => this.setState({ gcAmt: a, gcDesign: i })) })),
      gcAmtText: this.money(s.gcAmt), gcTo: s.gcTo, gcFrom: s.gcFrom, gcMsg: s.gcMsg,
      setGcTo: (e) => this.setState({ gcTo: e.target.value }), setGcFrom: (e) => this.setState({ gcFrom: e.target.value }), setGcMsg: (e) => this.setState({ gcMsg: e.target.value }),
      addGiftCard: pv(() => {
        const name = 'IRTH gift card · ' + this.money(s.gcAmt);
        const meta = (s.gcTo ? 'For ' + s.gcTo : 'Digital gift card') + (s.gcFrom ? ' from ' + s.gcFrom : '');
        const ex = (s.extras || []).concat([{ key: 'gc' + Date.now(), name: name, img: 'assets/f6545c5b247d744f2684c2d9e8fea9a4.png', cents: s.gcAmt, qty: 1, meta: meta }]);
        this.setState({ extras: ex, gcTo: '', gcFrom: '', gcMsg: '', toast: 'msg', toastKind: 'msg', toastTitle: 'Gift card added to your bag', toastSub: name, toastIc: 'gift' });
        clearTimeout(this._tt); this._tt = setTimeout(() => this.setState({ toast: '' }), 3600);
      }),
      ck0: s.ckStep === 0, ck1: s.ckStep === 1, ck2: s.ckStep === 2,
      ckSteps: ['Details', 'Delivery', 'Payment'].map((t, i) => ({ name: t, n: i + 1, bg: i < s.ckStep ? '#6E7059' : 'transparent', fg: i < s.ckStep ? '#F7EFE5' : '#1F2E26', bd: i <= s.ckStep ? '#6E7059' : '#C8B098', tc: i === s.ckStep ? '#1F2E26' : '#4E4A47', line: i < s.ckStep ? '#6E7059' : '#D9C9B7' })),
      ckBack: pv(() => this.setState({ ckStep: Math.max(0, s.ckStep - 1), formErr: '' })),
      ckNext: pv(() => {
        if (s.ckStep === 0) { const f = s.form; const miss = []; if (!f.name.trim()) miss.push('full name'); if (!phoneOk(f.phone)) miss.push('a valid phone number'); if (!f.address.trim()) miss.push('street address'); if (!f.city) miss.push('city'); if (f.email && !emailOk(f.email)) miss.push('a valid email');
          if (miss.length) { this.setState({ formErr: 'Please add ' + miss.join(', ') + '.' }); return; } }
        this.setState({ ckStep: Math.min(2, s.ckStep + 1), formErr: '' });
      }),
      shipOpts: [['std', 'Standard delivery', '2–4 working days', 4000], ['exp', 'Express delivery', 'Next working day', 9000], ['gift', 'Send as a gift', 'Prices hidden, note card included', 6500]].map((o) => { const on = s.ship === o[0]; return { name: o[1], sub: o[2], priceText: this.money(o[3]), on: on ? 'true' : 'false', bg: on ? '#FBF6EF' : 'transparent', bd: on ? '#6E7059' : '#D9C9B7', bw: on ? '1.5px' : '1px', dot: on ? '#6E7059' : '#C8B098', fill: on ? '#6E7059' : 'transparent', icStd: o[0] === 'std', icExp: o[0] === 'exp', icGift: o[0] === 'gift', pick: pv(() => this.setState({ ship: o[0] })) }; }),
      shipName: s.ship === 'exp' ? 'Express delivery' : s.ship === 'gift' ? 'Gift delivery' : 'Standard delivery',
      shipPriceText: this.money(s.ship === 'exp' ? 9000 : s.ship === 'gift' ? 6500 : 4000),
      grandTotalText: this.money(total + (s.ship === 'exp' ? 9000 : s.ship === 'gift' ? 6500 : 4000)),
      promoSoon: pv(() => this.msg('Promo codes coming soon', 'Gift cards and codes will be accepted at launch.', 'gift')),
      placeOrder: pv(() => {
        const f = s.form; const miss = [];
        if (!f.name.trim()) miss.push('full name'); if (!phoneOk(f.phone)) miss.push('a valid phone number'); if (!f.address.trim()) miss.push('street address'); if (!f.city) miss.push('city');
        if (f.email && !emailOk(f.email)) miss.push('a valid email');
        if (miss.length) { this.setState({ formErr: 'Please add ' + miss.join(', ') + '.', ckStep: 0 }); return; }
        const items = cartItems.map((ci) => ({ name: ci.name, qty: ci.qty, lineText: ci.lineText }));
        const order = { no: 'IRTH-' + (10000 + Math.floor(Math.random() * 89999)), first: f.name.trim().split(' ')[0], phone: f.phone, city: f.city, items: items, totalText: this.money(total + (s.ship === 'exp' ? 9000 : s.ship === 'gift' ? 6500 : 4000)), payText: payText(f.pay), summary: items.map((i) => i.name + ' × ' + i.qty).join(', ') };
        this.nav({ page: 'done', order: order, orders: [order].concat(s.orders), cart: {}, extras: [], ckStep: 0, formErr: '' });
      }),
      order: s.order || { first: '', no: '', phone: '', city: '', items: [], totalText: '', payText: '' },

      wishItems: Object.keys(s.wish).map((k) => card(d.byId[k])), wishEmpty: Object.keys(s.wish).length === 0,

      cform: s.cform, setC: setC, contactErr: s.contactErr, contactOpen: !s.contactSent, contactSent: s.contactSent,
      sendContact: pv(() => { const f = s.cform; if (!f.name.trim() || !emailOk(f.email) || !f.message.trim()) this.setState({ contactErr: 'Please add your name, a valid email and a message.' }); else this.setState({ contactSent: true, contactErr: '' }); }),
      resetContact: pv(() => this.setState({ contactSent: false, cform: { name: '', email: '', subject: 'An order', message: '' } })),

      auth: s.auth, setA: setA, authErr: s.authErr, regErr: s.regErr, loggedIn: !!s.user, loggedOut: !s.user,
      user: s.user || { first: '', email: '' },
      signIn: pv(() => { const a = s.auth; if (!emailOk(a.email) || !a.password) this.setState({ authErr: 'Enter your email and password.' }); else this.setState({ user: { first: a.email.split('@')[0], email: a.email }, authErr: '' }); }),
      register: pv(() => { const a = s.auth; if (!a.name.trim() || !emailOk(a.remail) || a.rpassword.length < 6) this.setState({ regErr: 'Add your name, a valid email and a password of 6+ characters.' }); else this.setState({ user: { first: a.name.trim().split(' ')[0], email: a.remail }, regErr: '' }); }),
      signOut: pv(() => this.setState({ user: null })),
      orders: s.orders, noOrders: s.orders.length === 0,

      info: { title: info.title, paras: info.paras.map((t) => ({ text: t })), links: (info.links || []).map((l) => ({ label: l[0], go: l[1] })) },
    };
  }
}

window.addEventListener('DOMContentLoaded', function () {
  window.DCMount('#app', '#irth-template', Component, {"deep": "#6E7059", "turns": 1.05, "heroFont": "instrument", "startPage": "home"});
});
