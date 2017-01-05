(function() {
    'use strict';

    /**
     * Class constructor for SSN Textfield MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */
    var MaterialPhoneTextfield = function MaterialPhoneTextfield(element) {
        this.element_ = element;
        this.rawValue = "";
        // Initialize instance.
        this.init();
    };
    window['MaterialPhoneTextfield'] = MaterialPhoneTextfield;

    /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */
    MaterialPhoneTextfield.prototype.Constant_ = {};

    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */
    MaterialPhoneTextfield.prototype.CssClasses_ = {
        LABEL: 'mdl-phone-textfield__label',
        INPUT: 'mdl-phone-textfield__input',
        IS_DIRTY: 'is-dirty',
        IS_FOCUSED: 'is-focused',
        IS_DISABLED: 'is-disabled',
        IS_INVALID: 'is-invalid',
        IS_UPGRADED: 'is-upgraded',
        MASKED: 'mdl-phone-textfield--masked'
    };

    /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialPhoneTextfield.prototype.onFocus_ = function (event) {
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    };

    /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialPhoneTextfield.prototype.onBlur_ = function (event) {
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    };

    MaterialPhoneTextfield.prototype.onChange_ = function (event) {
        var pattern = /^\(?(\d{3})\)?\u0020?\.?-?(\d{3})\u0020?\.?-?\u0020?(\d{4})$/;
        //Test the input string for basic format (optional '-')
        if (!pattern.test(this.input_.value)) {
            this.element_.classList.add(this.CssClasses_.IS_INVALID);
            return false;
        } else {
            var matches = pattern.exec(this.input_.value);
            this.rawValue = matches[1] + matches[2] + matches[3];
            this.input_.value = "(" + matches[1] + ") " + matches[2] + " - " + matches[3];
        }
    };

    /**
     * Handle reset event from out side.
     *
     * @param {Event} event The event that fired.
     * @private
     */
    MaterialPhoneTextfield.prototype.onReset_ = function (event) {
        this.updateClasses_();
    };

    /**
     * Handle class updates.
     *
     * @private
     */
    MaterialPhoneTextfield.prototype.updateClasses_ = function () {
        this.checkDisabled();
        this.checkValidity();
        this.checkDirty();
        this.checkFocus();
    };

    // Public methods.

    /**
     * Check the disabled state and update field accordingly.
     *
     * @public
     */
    MaterialPhoneTextfield.prototype.checkDisabled = function () {
        if (this.input_.disabled) {
            this.element_.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
        }
    };
    MaterialPhoneTextfield.prototype['checkDisabled'] =
        MaterialPhoneTextfield.prototype.checkDisabled;

    /**
     * Retrieve the raw value of the field
     * @returns {string} unmasked value
     */
    MaterialPhoneTextfield.prototype.getValue = function () {
        return this.rawValue;
    };
    MaterialPhoneTextfield.prototype['getValue'] =
        MaterialPhoneTextfield.prototype.getValue;

    /**
    * Check the focus state and update field accordingly.
    *
    * @public
    */
    MaterialPhoneTextfield.prototype.checkFocus = function () {
        if (Boolean(this.element_.querySelector(':focus'))) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
        }
    };
    MaterialPhoneTextfield.prototype['checkFocus'] =
      MaterialPhoneTextfield.prototype.checkFocus;

    /**
     * Check the validity state and update field accordingly.
     *
     * @public
     */
    MaterialPhoneTextfield.prototype.checkValidity = function () {
        if (this.input_.validity) {
            if (this.input_.validity.valid) {
                this.element_.classList.remove(this.CssClasses_.IS_INVALID);
            } else {
                this.element_.classList.add(this.CssClasses_.IS_INVALID);
            }
        }
    };
    MaterialPhoneTextfield.prototype['checkValidity'] =
        MaterialPhoneTextfield.prototype.checkValidity;

    /**
     * Check the dirty state and update field accordingly.
     *
     * @public
     */
    MaterialPhoneTextfield.prototype.checkDirty = function () {
        if (this.input_.value && this.input_.value.length > 0) {
            this.element_.classList.add(this.CssClasses_.IS_DIRTY);
        } else {
            this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
        }
    };
    MaterialPhoneTextfield.prototype['checkDirty'] =
        MaterialPhoneTextfield.prototype.checkDirty;

    /**
     * Disable text field.
     *
     * @public
     */
    MaterialPhoneTextfield.prototype.disable = function () {
        this.input_.disabled = true;
        this.updateClasses_();
    };
    MaterialPhoneTextfield.prototype['disable'] = MaterialPhoneTextfield.prototype.disable;

    /**
     * Enable text field.
     *
     * @public
     */
    MaterialPhoneTextfield.prototype.enable = function () {
        this.input_.disabled = false;
        this.updateClasses_();
    };
    MaterialPhoneTextfield.prototype['enable'] = MaterialPhoneTextfield.prototype.enable;

    /**
     * Update text field value.
     *
     * @param {string} value The value to which to set the control (optional).
     * @public
     */
    MaterialPhoneTextfield.prototype.change = function (value) {

        this.input_.value = value || '';
        this.updateClasses_();
    };
    MaterialPhoneTextfield.prototype['change'] = MaterialPhoneTextfield.prototype.change;

    /**
   * Initialize element.
   */
    MaterialPhoneTextfield.prototype.init = function () {

        if (this.element_) {
            this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
            this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

            if (this.input_) {
                this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
                this.boundFocusHandler = this.onFocus_.bind(this);
                this.boundBlurHandler = this.onBlur_.bind(this);
                this.boundResetHandler = this.onReset_.bind(this);
                this.boundChangeHandler = this.onChange_.bind(this);
                this.input_.addEventListener('input', this.boundUpdateClassesHandler);
                this.input_.addEventListener('focus', this.boundFocusHandler);
                this.input_.addEventListener('blur', this.boundBlurHandler);
                this.input_.addEventListener('reset', this.boundResetHandler);
                this.input_.addEventListener('change', this.boundChangeHandler);

                var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
                this.updateClasses_();
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
                if (invalid) {
                    this.element_.classList.add(this.CssClasses_.IS_INVALID);
                }
                if (this.input_.hasAttribute('autofocus')) {
                    this.element_.focus();
                    this.checkFocus();
                }
                if (this.input_.value.length > 0) {
                    this.onChange_();
                }
            }
        }
    };

    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialPhoneTextfield,
        classAsString: 'MaterialPhoneTextfield',
        cssClass: 'mdl-js-phone-textfield',
        widget: true
    });
})();