// Form Gallery JavaScript - Dynamic Form Patterns
(function($) {
    "use strict";
    
    // Utility function to generate form patterns
    function generateFormPatterns() {
        return {
            'single-column': {
                name: 'Single Column Form',
                html: '<form class="form-pattern" style="max-width:600px;margin:0 auto"><div class="form-group"><label>Full Name</label><input type="text" class="form-control" placeholder="Enter your full name"></div><div class="form-group"><label>Email</label><input type="email" class="form-control" placeholder="Enter email"></div><div class="form-group"><label>Phone</label><input type="tel" class="form-control" placeholder="(123) 456-7890"></div><div class="form-group"><label>Message</label><textarea class="form-control" rows="4"></textarea></div><button type="submit" class="btn btn-primary">Submit</button></form>',
                css: '.form-pattern { max-width: 600px; margin: 0 auto; }',
                js: '$("form").submit(function(e){ e.preventDefault(); alert("Submitted!"); });'
            },
            'horizontal-form': {
                name: 'Horizontal Form',
                html: '<form class="form-horizontal form-pattern"><div class="form-group"><label class="col-sm-3 control-label">Username</label><div class="col-sm-9"><input type="text" class="form-control"></div></div><div class="form-group"><label class="col-sm-3 control-label">Password</label><div class="col-sm-9"><input type="password" class="form-control"></div></div><div class="form-group"><div class="col-sm-offset-3 col-sm-9"><button type="submit" class="btn btn-primary">Sign in</button></div></div></form>',
                css: '.control-label { text-align: right; }',
                js: '$("form").submit(function(e){ e.preventDefault(); });'
            },
            'two-column': {
                name: 'Two Column Grid Form',
                html: '<form class="form-pattern"><div class="row"><div class="col-md-6"><div class="form-group"><label>First Name</label><input type="text" class="form-control"></div></div><div class="col-md-6"><div class="form-group"><label>Last Name</label><input type="text" class="form-control"></div></div></div><div class="row"><div class="col-md-6"><div class="form-group"><label>Email</label><input type="email" class="form-control"></div></div><div class="col-md-6"><div class="form-group"><label>Phone</label><input type="tel" class="form-control"></div></div></div><button type="submit" class="btn btn-success">Submit</button></form>',
                css: '',
                js: ''
            },
            'three-column': {
                name: 'Three Column Grid Form',
                html: '<form class="form-pattern"><div class="row"><div class="col-md-4"><div class="form-group"><label>City</label><input type="text" class="form-control"></div></div><div class="col-md-4"><div class="form-group"><label>State</label><select class="form-control"><option>Choose...</option><option>CA</option><option>TX</option><option>NY</option></select></div></div><div class="col-md-4"><div class="form-group"><label>Zip</label><input type="text" class="form-control"></div></div></div><button type="submit" class="btn btn-primary">Submit</button></form>',
                css: '',
                js: ''
            },
            'inline-form': {
                name: 'Inline Form',
                html: '<form class="form-inline form-pattern"><div class="form-group"><label>Name</label> <input type="text" class="form-control" placeholder="Jane Doe"></div> <div class="form-group"><label>Email</label> <input type="email" class="form-control" placeholder="jane@example.com"></div> <button type="submit" class="btn btn-primary">Send</button></form>',
                css: '.form-inline .form-group { margin-right: 10px; }',
                js: ''
            },
            'text-inputs': {
                name: 'Text Input Variations',
                html: '<form class="form-pattern" style="max-width:500px"><div class="form-group"><label>Text</label><input type="text" class="form-control" placeholder="Text input"></div><div class="form-group"><label>Password</label><input type="password" class="form-control"></div><div class="form-group"><label>Email</label><input type="email" class="form-control"></div><div class="form-group"><label>URL</label><input type="url" class="form-control" placeholder="https://example.com"></div><div class="form-group"><label>Search</label><input type="search" class="form-control"></div><div class="form-group"><label>Tel</label><input type="tel" class="form-control" placeholder="(555) 555-5555"></div></form>',
                css: '',
                js: ''
            },
            'input-groups': {
                name: 'Input Groups with Addons',
                html: '<form class="form-pattern"><div class="form-group"><label>Username</label><div class="input-group"><span class="input-group-addon">@</span><input type="text" class="form-control"></div></div><div class="form-group"><label>Email</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon">@example.com</span></div></div><div class="form-group"><label>Price</label><div class="input-group"><span class="input-group-addon">$</span><input type="text" class="form-control"><span class="input-group-addon">.00</span></div></div><div class="form-group"><label>Search</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-default" type="button">Go!</button></span></div></div></form>',
                css: '',
                js: ''
            },
            'input-sizing': {
                name: 'Input Sizing Examples',
                html: '<form class="form-pattern" style="max-width:600px"><div class="form-group"><label>Large Input</label><input type="text" class="form-control input-lg" placeholder="Large"></div><div class="form-group"><label>Default Input</label><input type="text" class="form-control" placeholder="Default"></div><div class="form-group"><label>Small Input</label><input type="text" class="form-control input-sm" placeholder="Small"></div></form>',
                css: '',
                js: ''
            },
            'textarea': {
                name: 'Textarea with Counter',
                html: '<form class="form-pattern"><div class="form-group"><label>Biography (Max 500 chars)</label><textarea class="form-control" id="bioText" rows="6" maxlength="500"></textarea><div class="char-counter"><span id="charCount">0</span> / 500</div></div><button type="submit" class="btn btn-primary">Submit</button></form>',
                css: '.char-counter { font-size: 12px; color: #777; text-align: right; margin-top: 5px; }',
                js: '$("#bioText").on("input", function() { $("#charCount").text($(this).val().length); });'
            },
            'select-dropdown': {
                name: 'Select Dropdowns',
                html: '<form class="form-pattern" style="max-width:500px"><div class="form-group"><label>Country</label><select class="form-control"><option>Select...</option><option>United States</option><option>United Kingdom</option><option>Canada</option></select></div><div class="form-group"><label>Multiple Select</label><select multiple class="form-control"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div></form>',
                css: '',
                js: ''
            },
            'checkbox-basic': {
                name: 'Basic Checkboxes',
                html: '<form class="form-pattern"><div class="form-group"><label>Select interests:</label><div class="checkbox"><label><input type="checkbox"> Sports</label></div><div class="checkbox"><label><input type="checkbox"> Music</label></div><div class="checkbox"><label><input type="checkbox"> Reading</label></div><div class="checkbox"><label><input type="checkbox"> Travel</label></div></div><button type="submit" class="btn btn-primary">Save</button></form>',
                css: '',
                js: ''
            },
            'checkbox-inline': {
                name: 'Inline Checkboxes',
                html: '<form class="form-pattern"><div class="form-group"><label>Days available:</label><div><label class="checkbox-inline"><input type="checkbox"> Mon</label><label class="checkbox-inline"><input type="checkbox"> Tue</label><label class="checkbox-inline"><input type="checkbox"> Wed</label><label class="checkbox-inline"><input type="checkbox"> Thu</label><label class="checkbox-inline"><input type="checkbox"> Fri</label></div></div><button type="submit" class="btn btn-success">Update</button></form>',
                css: '',
                js: ''
            },
            'radio-basic': {
                name: 'Basic Radio Buttons',
                html: '<form class="form-pattern"><div class="form-group"><label>Choose plan:</label><div class="radio"><label><input type="radio" name="plan"> Free - $0/month</label></div><div class="radio"><label><input type="radio" name="plan"> Basic - $9.99/month</label></div><div class="radio"><label><input type="radio" name="plan"> Pro - $19.99/month</label></div></div><button type="submit" class="btn btn-primary">Subscribe</button></form>',
                css: '',
                js: ''
            },
            'radio-inline': {
                name: 'Inline Radio Buttons',
                html: '<form class="form-pattern"><div class="form-group"><label>Gender:</label><div><label class="radio-inline"><input type="radio" name="gender"> Male</label><label class="radio-inline"><input type="radio" name="gender"> Female</label><label class="radio-inline"><input type="radio" name="gender"> Other</label></div></div><button type="submit" class="btn btn-info">Continue</button></form>',
                css: '',
                js: ''
            },
            'switch-toggle': {
                name: 'Toggle Switches',
                html: '<form class="form-pattern"><div class="form-group"><label>Email Notifications</label><br><label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label> <span style="margin-left:10px">Receive emails</span></div><div class="form-group"><label>SMS Notifications</label><br><label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label> <span style="margin-left:10px">Receive SMS</span></div><button type="submit" class="btn btn-primary">Save</button></form>',
                css: '',
                js: ''
            },
            'date-time': {
                name: 'Date & Time Inputs',
                html: '<form class="form-pattern" style="max-width:500px"><div class="form-group"><label>Date</label><input type="date" class="form-control"></div><div class="form-group"><label>Time</label><input type="time" class="form-control"></div><div class="form-group"><label>Date & Time</label><input type="datetime-local" class="form-control"></div><div class="form-group"><label>Month</label><input type="month" class="form-control"></div><button type="submit" class="btn btn-primary">Schedule</button></form>',
                css: '',
                js: ''
            },
            'file-upload': {
                name: 'File Upload',
                html: '<form class="form-pattern"><div class="form-group"><label>Single File</label><input type="file" class="form-control"></div><div class="form-group"><label>Multiple Files</label><input type="file" class="form-control" multiple></div><div class="form-group"><label>Image Upload</label><input type="file" class="form-control" accept="image/*"></div><button type="submit" class="btn btn-success">Upload</button></form>',
                css: '',
                js: ''
            },
            'color-picker': {
                name: 'Color Picker',
                html: '<form class="form-pattern"><div class="form-group"><label>Primary Color</label><input type="color" class="form-control" value="#337ab7" style="height:50px"></div><div class="form-group"><label>Secondary Color</label><input type="color" class="form-control" value="#5cb85c" style="height:50px"></div><button type="submit" class="btn btn-primary">Apply</button></form>',
                css: '',
                js: ''
            },
            'range-slider': {
                name: 'Range Slider',
                html: '<form class="form-pattern"><div class="form-group"><label>Volume: <span id="volumeVal">50</span>%</label><input type="range" class="form-control" id="volumeRange" min="0" max="100" value="50" style="width:100%"></div><div class="form-group"><label>Brightness: <span id="brightVal">75</span>%</label><input type="range" class="form-control" id="brightRange" min="0" max="100" value="75" style="width:100%"></div><button type="submit" class="btn btn-primary">Apply</button></form>',
                css: '',
                js: '$("#volumeRange").on("input", function(){ $("#volumeVal").text($(this).val()); }); $("#brightRange").on("input", function(){ $("#brightVal").text($(this).val()); });'
            },
            'number-spinner': {
                name: 'Number Spinner',
                html: '<form class="form-pattern" style="max-width:500px"><div class="form-group"><label>Quantity</label><input type="number" class="form-control" min="1" max="99" value="1"></div><div class="form-group"><label>Age</label><input type="number" class="form-control" min="18" max="120" value="25"></div><div class="form-group"><label>Price ($)</label><input type="number" class="form-control" min="0" step="0.01" value="19.99"></div><button type="submit" class="btn btn-success">Calculate</button></form>',
                css: '',
                js: ''
            },
            'validation-states': {
                name: 'Validation States',
                html: '<form class="form-pattern"><div class="form-group has-success"><label class="control-label">Success Input</label><input type="text" class="form-control" value="Valid"><span class="help-block">✓ Valid</span></div><div class="form-group has-warning"><label class="control-label">Warning Input</label><input type="text" class="form-control"><span class="help-block">⚠ Check this</span></div><div class="form-group has-error"><label class="control-label">Error Input</label><input type="text" class="form-control"><span class="help-block">✗ Required</span></div><button type="submit" class="btn btn-primary">Validate</button></form>',
                css: '.help-block { font-size: 12px; margin-top: 5px; }',
                js: ''
            },
            'help-text': {
                name: 'Help Text & Tooltips',
                html: '<form class="form-pattern"><div class="form-group"><label>Username <span data-toggle="tooltip" title="3-20 characters" style="cursor:help">ⓘ</span></label><input type="text" class="form-control"><span class="help-block">Must be 3-20 characters</span></div><div class="form-group"><label>Password</label><input type="password" class="form-control"><span class="help-block">At least 8 characters</span></div><button type="submit" class="btn btn-primary">Submit</button></form>',
                css: '.help-block { color: #737373; font-size: 13px; }',
                js: '$("[data-toggle=tooltip]").tooltip();'
            },
            'input-masks': {
                name: 'Input Masks',
                html: '<form class="form-pattern" style="max-width:500px"><div class="form-group"><label>Phone Number</label><input type="text" class="form-control" id="phoneInput" placeholder="(999) 999-9999" maxlength="14"></div><div class="form-group"><label>Date (MM/DD/YYYY)</label><input type="text" class="form-control" id="dateInput" placeholder="MM/DD/YYYY" maxlength="10"></div><div class="form-group"><label>SSN</label><input type="text" class="form-control" id="ssnInput" placeholder="999-99-9999" maxlength="11"></div><button type="submit" class="btn btn-primary">Submit</button></form>',
                css: '',
                js: '$("#phoneInput").on("input", function(){ var x=$(this).val().replace(/\\D/g,"").match(/(\\d{0,3})(\\d{0,3})(\\d{0,4})/); $(this).val(!x[2]?x[1]:"("+x[1]+") "+x[2]+(x[3]?"-"+x[3]:"")); }); $("#dateInput").on("input", function(){ var x=$(this).val().replace(/\\D/g,"").match(/(\\d{0,2})(\\d{0,2})(\\d{0,4})/); $(this).val(!x[2]?x[1]:x[1]+"/"+x[2]+(x[3]?"/"+x[3]:"")); });'
            },
            'autocomplete': {
                name: 'Autocomplete Input',
                html: '<form class="form-pattern"><div class="form-group"><label>Country (start typing)</label><input type="text" class="form-control" id="countryAuto" placeholder="Type to search..."><ul id="suggestions" style="list-style:none;padding:0;border:1px solid #ccc;display:none;max-height:200px;overflow-y:auto"></ul></div><button type="submit" class="btn btn-primary">Search</button></form>',
                css: '#suggestions { background: white; } #suggestions li { padding: 10px; cursor: pointer; } #suggestions li:hover { background: #f5f5f5; }',
                js: 'var countries=["United States","United Kingdom","Canada","Australia","Germany"]; $("#countryAuto").on("input",function(){ var val=$(this).val().toLowerCase(); var sugg=$("#suggestions"); sugg.empty(); if(val.length>0){ var matches=countries.filter(function(c){ return c.toLowerCase().indexOf(val)===0; }); if(matches.length>0){ matches.forEach(function(m){ sugg.append("<li>"+m+"</li>"); }); sugg.show(); }else{ sugg.hide(); } }else{ sugg.hide(); } }); $(document).on("click","#suggestions li",function(){ $("#countryAuto").val($(this).text()); $("#suggestions").hide(); });'
            },
            'tags-input': {
                name: 'Tags Input',
                html: '<form class="form-pattern"><div class="form-group"><label>Add Tags</label><div class="tags-input-container" id="tagsContainer"><input type="text" id="tagInput" placeholder="Type and press Enter..." style="border:none;outline:none;flex:1;padding:5px"></div><span class="help-block">Press Enter to add</span></div><button type="submit" class="btn btn-primary">Save</button></form>',
                css: '.tags-input-container{border:1px solid #ccc;border-radius:4px;padding:5px;min-height:38px;display:flex;flex-wrap:wrap;gap:5px} .tag-item{background:#5bc0de;color:white;padding:4px 10px;border-radius:3px;display:inline-flex;align-items:center} .tag-item .remove-tag{margin-left:8px;cursor:pointer;font-weight:bold}',
                js: 'var tags=[]; $("#tagInput").on("keypress",function(e){ if(e.which===13){ e.preventDefault(); var txt=$(this).val().trim(); if(txt!==""&&tags.indexOf(txt)===-1){ tags.push(txt); var html="<span class=\\"tag-item\\">"+txt+"<span class=\\"remove-tag\\" data-tag=\\""+txt+"\\">×</span></span>"; $(html).insertBefore("#tagInput"); $(this).val(""); } } }); $(document).on("click",".remove-tag",function(){ var tag=$(this).data("tag"); tags=tags.filter(function(t){return t!==tag;}); $(this).parent().remove(); });'
            },
            'registration': {
                name: 'Registration Form',
                html: '<form class="form-pattern" style="max-width:600px;margin:0 auto"><h3>Create Account</h3><div class="row"><div class="col-sm-6"><div class="form-group"><label>First Name *</label><input type="text" class="form-control" required></div></div><div class="col-sm-6"><div class="form-group"><label>Last Name *</label><input type="text" class="form-control" required></div></div></div><div class="form-group"><label>Email *</label><input type="email" class="form-control" required></div><div class="form-group"><label>Password *</label><input type="password" class="form-control" required></div><div class="checkbox"><label><input type="checkbox" required> I agree to Terms</label></div><button type="submit" class="btn btn-success btn-block">Register</button></form>',
                css: '.form-pattern h3 { margin-bottom: 20px; text-align: center; }',
                js: ''
            },
            'login': {
                name: 'Login Form',
                html: '<form class="form-pattern" style="max-width:400px;margin:0 auto;padding:30px;border:1px solid #ddd;border-radius:8px;background:white"><h3 style="text-align:center;margin-bottom:30px">Sign In</h3><div class="form-group"><label>Email</label><input type="email" class="form-control" required></div><div class="form-group"><label>Password</label><input type="password" class="form-control" required></div><div class="checkbox"><label><input type="checkbox"> Remember me</label></div><button type="submit" class="btn btn-primary btn-block">Sign In</button><div style="text-align:center;margin-top:15px"><a href="#">Forgot password?</a></div></form>',
                css: '',
                js: ''
            },
            'contact': {
                name: 'Contact Form',
                html: '<form class="form-pattern" style="max-width:700px;margin:0 auto"><h3>Contact Us</h3><p class="text-muted">We\'d love to hear from you</p><div class="row"><div class="col-sm-6"><div class="form-group"><label>Your Name *</label><input type="text" class="form-control" required></div></div><div class="col-sm-6"><div class="form-group"><label>Your Email *</label><input type="email" class="form-control" required></div></div></div><div class="form-group"><label>Subject *</label><input type="text" class="form-control" required></div><div class="form-group"><label>Message *</label><textarea class="form-control" rows="6" required></textarea></div><button type="submit" class="btn btn-primary">Send Message</button></form>',
                css: '',
                js: ''
            },
            'payment': {
                name: 'Payment Form',
                html: '<form class="form-pattern" style="max-width:600px;margin:0 auto"><h3>Payment Information</h3><div class="form-group"><label>Cardholder Name *</label><input type="text" class="form-control" required></div><div class="form-group"><label>Card Number *</label><input type="text" class="form-control" placeholder="1234 5678 9012 3456" maxlength="19" required></div><div class="row"><div class="col-sm-6"><div class="form-group"><label>Expiry Date *</label><input type="text" class="form-control" placeholder="MM/YY" maxlength="5" required></div></div><div class="col-sm-6"><div class="form-group"><label>CVV *</label><input type="text" class="form-control" placeholder="123" maxlength="4" required></div></div></div><div class="checkbox"><label><input type="checkbox"> Save card</label></div><button type="submit" class="btn btn-success btn-block btn-lg">Pay Now</button></form>',
                css: '.form-pattern h3 { margin-bottom: 20px; text-align: center; }',
                js: ''
            },
            'search-filter': {
                name: 'Search & Filter Form',
                html: '<form class="form-pattern"><h3>Advanced Search</h3><div class="form-group"><div class="input-group input-group-lg"><input type="text" class="form-control" placeholder="Search..."><span class="input-group-btn"><button class="btn btn-primary" type="submit">Search</button></span></div></div><div class="row"><div class="col-md-4"><div class="form-group"><label>Category</label><select class="form-control"><option>All</option><option>Electronics</option><option>Clothing</option><option>Books</option></select></div></div><div class="col-md-4"><div class="form-group"><label>Min Price</label><input type="number" class="form-control" placeholder="$0"></div></div><div class="col-md-4"><div class="form-group"><label>Max Price</label><input type="number" class="form-control" placeholder="$1000"></div></div></div><div class="form-group" style="text-align:center"><button type="button" class="btn btn-default">Reset</button> <button type="submit" class="btn btn-success">Apply Filters</button></div></form>',
                css: '',
                js: ''
            }
        };
    }
    
    var formPatterns = generateFormPatterns();
    var currentPattern = null;
    var favorites = [];
    var allOptions = [];
    
    $(document).ready(function() {
        initializeEventHandlers();
        loadFavorites();
        cacheOptions();
    });
    
    function initializeEventHandlers() {
        // Form selector change
        $("#formSelector").on("change", function() {
            var key = $(this).val();
            if (key && formPatterns[key]) {
                loadPattern(key);
            } else {
                showEmptyState();
            }
        });
        
        // Search functionality
        $("#patternSearch").on("input", function() {
            var searchTerm = $(this).val().toLowerCase();
            filterPatterns(searchTerm);
        });
        
        // Category buttons
        $(".category-btn").on("click", function() {
            var category = $(this).data("category");
            $(".category-btn").removeClass("active");
            $(this).addClass("active");
            filterByCategory(category);
        });
        
        // Preview size controls
        $("#previewMobile").on("click", function() {
            setPreviewSize("mobile");
        });
        
        $("#previewTablet").on("click", function() {
            setPreviewSize("tablet");
        });
        
        $("#previewDesktop").on("click", function() {
            setPreviewSize("desktop");
        });
        
        // Favorite button
        $("#favoriteBtn").on("click", function() {
            toggleFavorite();
        });
        
        // Keyboard shortcuts
        $(document).on("keydown", function(e) {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case "1":
                        e.preventDefault();
                        $("#copyHtmlBtn").click();
                        break;
                    case "2":
                        e.preventDefault();
                        $("#copyCssBtn").click();
                        break;
                    case "3":
                        e.preventDefault();
                        $("#copyJsBtn").click();
                        break;
                    case "d":
                    case "D":
                        e.preventDefault();
                        $("#downloadBtn").click();
                        break;
                }
            }
            // Enter key on select
            if (e.key === "Enter" && document.activeElement.id === "formSelector") {
                var key = $("#formSelector").val();
                if (key) {
                    loadPattern(key);
                }
            }
        });
        
        $("#toggleCode").on("click", function() {
            $("#codeSection").slideToggle();
        });
        
        $("#copyHtmlBtn").on("click", function() {
            copyToClipboard(currentPattern.html, "HTML");
        });
        
        $("#copyCssBtn").on("click", function() {
            copyToClipboard(currentPattern.css, "CSS");
        });
        
        $("#copyJsBtn").on("click", function() {
            copyToClipboard(currentPattern.js, "JavaScript");
        });
        
        $("#downloadBtn").on("click", function() {
            downloadPattern();
        });
    }
    
    function cacheOptions() {
        $("#formSelector option").each(function() {
            if ($(this).val()) {
                allOptions.push({
                    value: $(this).val(),
                    text: $(this).text(),
                    category: $(this).data("category"),
                    element: $(this)
                });
            }
        });
    }
    
    function filterPatterns(searchTerm) {
        if (!searchTerm) {
            // Show all
            $("#formSelector option").show();
            $("#formSelector optgroup").show();
            updatePatternCount(allOptions.length);
            return;
        }
        
        var visibleCount = 0;
        $("#formSelector option").each(function() {
            var optionText = $(this).text().toLowerCase();
            if (optionText.includes(searchTerm)) {
                $(this).show();
                visibleCount++;
            } else {
                $(this).hide();
            }
        });
        
        // Hide empty optgroups
        $("#formSelector optgroup").each(function() {
            var hasVisible = $(this).find("option:visible").length > 0;
            if (hasVisible) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        updatePatternCount(visibleCount);
    }
    
    function filterByCategory(category) {
        $("#patternSearch").val("");
        
        if (!category) {
            $("#formSelector option").show();
            $("#formSelector optgroup").show();
            updatePatternCount(allOptions.length);
            return;
        }
        
        var visibleCount = 0;
        $("#formSelector option").each(function() {
            if ($(this).data("category") === category) {
                $(this).show();
                visibleCount++;
            } else {
                $(this).hide();
            }
        });
        
        $("#formSelector optgroup").each(function() {
            if ($(this).data("category") === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        
        updatePatternCount(visibleCount);
    }
    
    function updatePatternCount(count) {
        $("#patternCount").text(count);
    }
    
    function setPreviewSize(size) {
        var container = $("#previewContainer");
        container.removeClass("preview-mobile preview-tablet preview-desktop");
        
        $(".preview-size-controls .btn").removeClass("active");
        
        switch(size) {
            case "mobile":
                container.addClass("preview-mobile");
                $("#previewMobile").addClass("active");
                break;
            case "tablet":
                container.addClass("preview-tablet");
                $("#previewTablet").addClass("active");
                break;
            case "desktop":
            default:
                container.addClass("preview-desktop");
                $("#previewDesktop").addClass("active");
                break;
        }
    }
    
    function loadFavorites() {
        try {
            var stored = localStorage.getItem("formGalleryFavorites");
            if (stored) {
                favorites = JSON.parse(stored);
            }
        } catch(e) {
            console.error("Could not load favorites:", e);
        }
    }
    
    function saveFavorites() {
        try {
            localStorage.setItem("formGalleryFavorites", JSON.stringify(favorites));
        } catch(e) {
            console.error("Could not save favorites:", e);
        }
    }
    
    function toggleFavorite() {
        if (!currentPattern) return;
        
        var patternKey = $("#formSelector").val();
        var index = favorites.indexOf(patternKey);
        
        if (index > -1) {
            favorites.splice(index, 1);
            $("#favoriteBtn i").removeClass("fa-star").addClass("fa-star-o");
            showAlert("Removed from favorites", "info");
        } else {
            favorites.push(patternKey);
            $("#favoriteBtn i").removeClass("fa-star-o").addClass("fa-star");
            showAlert("Added to favorites", "success");
        }
        
        saveFavorites();
    }
    
    function updateFavoriteButton(patternKey) {
        $("#favoriteBtn").prop("disabled", false);
        if (favorites.indexOf(patternKey) > -1) {
            $("#favoriteBtn i").removeClass("fa-star-o").addClass("fa-star");
        } else {
            $("#favoriteBtn i").removeClass("fa-star").addClass("fa-star-o");
        }
    }
    
    function getPatternMetadata(key) {
        var metadata = {
            description: "A form pattern example",
            category: "Form",
            complexity: "Beginner"
        };
        
        // Add specific metadata based on pattern
        if (key.includes("registration") || key.includes("payment") || key.includes("search-filter")) {
            metadata.complexity = "Advanced";
        } else if (key.includes("validation") || key.includes("autocomplete") || key.includes("tags")) {
            metadata.complexity = "Intermediate";
        }
        
        return metadata;
    }
    
    function showPatternInfo(key) {
        var pattern = formPatterns[key];
        var metadata = getPatternMetadata(key);
        var category = $("#formSelector option:selected").parent().attr("label") || "Form";
        
        $("#patternDescription").text("A " + pattern.name.toLowerCase() + " implementation with Bootstrap styling.");
        $("#patternCategory").text(category);
        $("#patternComplexity").text(metadata.complexity);
        $("#patternInfo").fadeIn();
    }
    
    function loadPattern(key) {
        currentPattern = formPatterns[key];
        $("#previewContainer").html(currentPattern.html);
        $("#htmlCodeContent").text(currentPattern.html);
        $("#cssCodeContent").text(currentPattern.css);
        $("#jsCodeContent").text(currentPattern.js);
        
        // Execute pattern JavaScript in a safe context
        // Note: This is safe because all patterns are predefined and not user-generated
        try {
            if (currentPattern.js && currentPattern.js.trim() !== '') {
                eval(currentPattern.js);
            }
        } catch(e) { 
            console.error("Error executing pattern JavaScript:", e); 
        }
        
        $("#copyHtmlBtn, #copyCssBtn, #copyJsBtn, #downloadBtn").prop("disabled", false);
        updateFavoriteButton(key);
        showPatternInfo(key);
        showAlert("Pattern loaded: " + currentPattern.name, "success");
    }
    
    function showEmptyState() {
        $("#previewContainer").html('<div class="empty-state"><i class="fa fa-hand-pointer-o fa-3x"></i><h3>Welcome to the Form Gallery!</h3><p>Select a form pattern from the list or use the category buttons above to get started</p><div class="empty-state-features"><div class="row"><div class="col-sm-4"><i class="fa fa-eye fa-2x"></i><p><strong>Live Preview</strong><br>See forms in action</p></div><div class="col-sm-4"><i class="fa fa-code fa-2x"></i><p><strong>View Code</strong><br>HTML, CSS & JavaScript</p></div><div class="col-sm-4"><i class="fa fa-download fa-2x"></i><p><strong>Export</strong><br>Ready to use files</p></div></div></div></div>');
        $("#copyHtmlBtn, #copyCssBtn, #copyJsBtn, #downloadBtn, #favoriteBtn").prop("disabled", true);
        $("#patternInfo").hide();
        currentPattern = null;
    }
    
    function copyToClipboard(text, type) {
        // Try modern Clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(function() {
                showAlert(type + " copied to clipboard!", "success");
            }).catch(function(err) {
                // Fallback to older method
                copyToClipboardFallback(text, type);
            });
        } else {
            // Fallback for older browsers
            copyToClipboardFallback(text, type);
        }
    }
    
    function copyToClipboardFallback(text, type) {
        var textarea = $("<textarea>");
        textarea.val(text).css({position: "fixed", opacity: 0});
        $("body").append(textarea);
        textarea[0].select();
        try {
            var successful = document.execCommand("copy");
            if (successful) {
                showAlert(type + " copied to clipboard!", "success");
            } else {
                showAlert("Failed to copy " + type, "danger");
            }
        } catch(err) {
            showAlert("Failed to copy " + type, "danger");
        }
        textarea.remove();
    }
    
    function downloadPattern() {
        if (!currentPattern) return;
        var content = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>" + currentPattern.name + "</title>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<style>\n" + currentPattern.css + "\n</style>\n</head>\n<body>\n<div class=\"container\" style=\"margin-top:50px\">\n" + currentPattern.html + "\n</div>\n<script src=\"https://code.jquery.com/jquery-1.12.4.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<script>\n" + currentPattern.js + "\n</script>\n</body>\n</html>";
        var blob = new Blob([content], {type: "text/html"});
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = currentPattern.name.toLowerCase().replace(/\s+/g, "-") + ".html";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showAlert("Downloaded: " + currentPattern.name, "success");
    }
    
    function showAlert(message, type) {
        var alertHtml = '<div class="alert alert-' + type + ' alert-dismissible fade in"><button type="button" class="close" data-dismiss="alert">&times;</button>' + message + '</div>';
        var alertElement = $(alertHtml);
        $("#alertContainer").append(alertElement);
        setTimeout(function() {
            alertElement.fadeOut(function() { $(this).remove(); });
        }, 3000);
    }
    
})(jQuery);
