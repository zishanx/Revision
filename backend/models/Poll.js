// ## `this`, `.call`, `.bind` — Callbacks

// **Rule #1:** `this` is decided by *how* a function is called (what's right before the dot at call-time), NOT where it's defined.

// - `obj.fn()` → `this` = `obj` (whatever's before the dot)
// - `fn()` (bare call, nothing before dot) → `this` = `undefined` (strict mode) or global object

// **The callback trap:**
// ```js
// class Timer {
//   tick() { console.log(this.seconds); }
// }
// const t = new Timer();

// t.tick();              // this = t → works
// setTimeout(t.tick, 1000); // this = undefined → breaks! function got "ripped" from t
// ```
// Passing `t.tick` (no parens) hands over the *bare function*, disconnected from `t`. Whoever calls it later (setTimeout, addEventListener, etc.) calls it bare — `this` gets hijacked.

// **`.call(t)` vs `.bind(t)`:**
// - `.call(t)` → runs the function **immediately** with `this = t`, returns the result. Wrong tool for handing over a function to run later.
// - `.bind(t)` → returns a **new function** permanently welded to `this = t`, without running it. This is why callbacks use `.bind` — you're handing the function to someone else to call later, and `.bind` locks in `this` so it can't get hijacked.

// ```js
// setTimeout(t.tick.bind(t), 1000); // this = t forever, works correctly
// ```

// **Classic DOM example:** `button.addEventListener('click', this.handleClick)` — plain handoff breaks `this` because the browser calls it as `button.handleClick()` internally → `this` becomes `button`, not your class instance. Fix: `.bind(this)`.