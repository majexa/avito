'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = frameParent;
/**
 * Change focus to the parent context. If the current context is the top level browsing context,
 * the context remains unchanged.
 *
 * @see  https://w3c.github.io/webdriver/webdriver-spec.html#switch-to-parent-frame
 * @type protocol
 *
 */

function frameParent() {
    return this.requestHandler.create({
        path: '/session/:sessionId/frame/parent',
        method: 'POST'
    });
}
module.exports = exports['default'];