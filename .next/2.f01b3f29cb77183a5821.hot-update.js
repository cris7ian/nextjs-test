webpackHotUpdate(2,{

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(96);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(95);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _stringify = __webpack_require__(93);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(66);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(67);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(68);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(70);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(69);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(64);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _link = __webpack_require__(121);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _axios = __webpack_require__(75);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_React$Component) {
	    (0, _inherits3.default)(_class, _React$Component);
	
	    function _class() {
	        (0, _classCallCheck3.default)(this, _class);
	        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(_class, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // Cache data in localStorage if
	            // not already cached
	            if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var detailStyle = {
	                ul: {
	                    marginTop: '100px'
	                }
	            };
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _head2.default,
	                    null,
	                    _react2.default.createElement(
	                        'title',
	                        null,
	                        'League Table'
	                    ),
	                    _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
	                    _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pure-g' },
	                    _react2.default.createElement('div', { className: 'pure-u-8-24' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pure-u-4-24' },
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            this.props.standing[0].teamName
	                        ),
	                        _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }),
	                        _react2.default.createElement(
	                            'h3',
	                            null,
	                            'Points: ',
	                            this.props.standing[0].points
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'pure-u-12-24' },
	                        _react2.default.createElement(
	                            'ul',
	                            { style: detailStyle.ul },
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Goals'
	                                ),
	                                ': ',
	                                this.props.standing[0].goals
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Wins'
	                                ),
	                                ': ',
	                                this.props.standing[0].wins
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Losses'
	                                ),
	                                ': ',
	                                this.props.standing[0].losses
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Draws'
	                                ),
	                                ': ',
	                                this.props.standing[0].draws
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Goals Against'
	                                ),
	                                ': ',
	                                this.props.standing[0].goalsAgainst
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Goal Difference'
	                                ),
	                                ': ',
	                                this.props.standing[0].goalDifference
	                            ),
	                            _react2.default.createElement(
	                                'li',
	                                null,
	                                _react2.default.createElement(
	                                    'strong',
	                                    null,
	                                    'Played'
	                                ),
	                                ': ',
	                                this.props.standing[0].playedGames
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _link2.default,
	                            { href: '/' },
	                            'Home'
	                        )
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'getInitialProps',
	        value: function () {
	            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
	                var query = _ref2.query;
	                var id, res, bplData;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                // Get id from query
	                                id = query.id;
	
	                                if (process.browser) {
	                                    _context.next = 8;
	                                    break;
	                                }
	
	                                _context.next = 4;
	                                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');
	
	                            case 4:
	                                res = _context.sent;
	                                return _context.abrupt('return', {
	                                    data: res.data,
	                                    // Filter and return data based on query
	                                    standing: res.data.standing.filter(function (s) {
	                                        return s.position == id;
	                                    })
	                                });
	
	                            case 8:
	                                // Not on the server just navigating so use
	                                // the cache
	                                bplData = JSON.parse(sessionStorage.getItem('bpl'));
	                                // Filter and return data based on query
	
	                                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
	                                        return s.position == id;
	                                    }) });
	
	                            case 10:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function getInitialProps(_x) {
	                return _ref.apply(this, arguments);
	            }
	
	            return getInitialProps;
	        }()
	    }]);
	    return _class;
	}(_react2.default.Component);
	
	exports.default = _class;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbHMuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OzRDQXVCeUI7QUFDakI7QUFDQTtBQUNBLGdCQUFHLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBSixFQUFtQ0QsZUFBZUUsT0FBZixDQUF1QixLQUF2QixFQUE4Qix5QkFBZSxLQUFLQyxLQUFMLENBQVdDLElBQTFCLENBQTlCO0FBQ3RDOzs7aUNBRVE7O0FBRUwsZ0JBQU1DLGNBQWM7QUFDaEJDLG9CQUFJO0FBQ0FDLCtCQUFXO0FBRFg7QUFEWSxhQUFwQjs7QUFNQSxtQkFDSztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUksNERBQU0sTUFBSyxVQUFYLEVBQXNCLFNBQVEsdUNBQTlCLEdBRko7QUFHSSw0REFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxvREFBNUI7QUFISixpQkFESDtBQU9HO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFFBQWY7QUFDSSwyREFBSyxXQUFVLGFBQWYsR0FESjtBQUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLGFBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyxpQ0FBS0osS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCQztBQUE1Qix5QkFESjtBQUVJLCtEQUFLLEtBQUssS0FBS04sS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCRSxRQUFqQyxFQUEyQyxXQUFVLFVBQXJELEdBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFhLGlDQUFLUCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJHO0FBQXBDO0FBSEoscUJBRko7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxjQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFJLE9BQU9OLFlBQVlDLEVBQXZCO0FBQ0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTZCLHFDQUFLSCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJJO0FBQXBELDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTRCLHFDQUFLVCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJLO0FBQW5ELDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQThCLHFDQUFLVixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJNO0FBQXJELDZCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQTZCLHFDQUFLWCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJPO0FBQXBELDZCQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQXFDLHFDQUFLWixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJRO0FBQTVELDZCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQXVDLHFDQUFLYixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJTO0FBQTlELDZCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBSjtBQUFBO0FBQThCLHFDQUFLZCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJVO0FBQXJEO0FBUEoseUJBREo7QUFVSTtBQUFBO0FBQUEsOEJBQU0sTUFBSyxHQUFYO0FBQUE7QUFBQTtBQVZKO0FBUEo7QUFQSCxhQURMO0FBOEJIOzs7OztvQkFoRThCQyxLLFNBQUFBLEs7Ozs7OztBQUMzQjtBQUNNQyxrQyxHQUFLRCxNQUFNQyxFOztvQ0FDYkMsUUFBUUMsTzs7Ozs7O3VDQUVVLGdCQUFNQyxHQUFOLENBQVUsOERBQVYsQzs7O0FBQVpDLG1DO2lFQUNDO0FBQ0hwQiwwQ0FBTW9CLElBQUlwQixJQURQO0FBRUg7QUFDQUksOENBQVVnQixJQUFJcEIsSUFBSixDQUFTSSxRQUFULENBQWtCaUIsTUFBbEIsQ0FBeUI7QUFBQSwrQ0FBS0MsRUFBRUMsUUFBRixJQUFjUCxFQUFuQjtBQUFBLHFDQUF6QjtBQUhQLGlDOzs7QUFNUDtBQUNBO0FBQ01RLHVDLEdBQVVDLEtBQUtDLEtBQUwsQ0FBVzlCLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBWCxDO0FBQ2hCOztpRUFDTyxFQUFDTyxVQUFVb0IsUUFBUXBCLFFBQVIsQ0FBaUJpQixNQUFqQixDQUF3QjtBQUFBLCtDQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEscUNBQXhCLENBQVgsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakJVLGdCQUFNVyxTIiwiZmlsZSI6ImRldGFpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NyaXN0aWFuL0RldmVsb3Blci9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtxdWVyeX0pIHtcbiAgICAgICAgLy8gR2V0IGlkIGZyb20gcXVlcnlcbiAgICAgICAgY29uc3QgaWQgPSBxdWVyeS5pZDtcbiAgICAgICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgLy8gU3RpbGwgb24gdGhlIHNlcnZlciBzbyBtYWtlIGEgcmVxdWVzdFxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgICAgICAgICAgc3RhbmRpbmc6IHJlcy5kYXRhLnN0YW5kaW5nLmZpbHRlcihzID0+IHMucG9zaXRpb24gPT0gaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciBqdXN0IG5hdmlnYXRpbmcgc28gdXNlXG4gICAgICAgICAgICAvLyB0aGUgY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGJwbERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKTtcbiAgICAgICAgICAgIC8vIEZpbHRlciBhbmQgcmV0dXJuIGRhdGEgYmFzZWQgb24gcXVlcnlcbiAgICAgICAgICAgIHJldHVybiB7c3RhbmRpbmc6IGJwbERhdGEuc3RhbmRpbmcuZmlsdGVyKHMgPT4gcy5wb3NpdGlvbiA9PSBpZCl9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIC8vIENhY2hlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIGlmXG4gICAgICAgIC8vIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgICAgICBpZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRldGFpbFN0eWxlID0ge1xuICAgICAgICAgICAgdWw6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgKFxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTgtMjRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnRlYW1OYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5jcmVzdFVSSX0gY2xhc3NOYW1lPVwicHVyZS1pbWdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UG9pbnRzOiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wb2ludHN9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e2RldGFpbFN0eWxlLnVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2Fsczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZ29hbHN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XaW5zPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS53aW5zfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+TG9zc2VzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5sb3NzZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5EcmF3czwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZHJhd3N9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FscyBBZ2FpbnN0PC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc0FnYWluc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FsIERpZmZlcmVuY2U8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxEaWZmZXJlbmNlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UGxheWVkPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wbGF5ZWRHYW1lc308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxuICB9XG4iXX0=
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/details"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/details") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLmpzP2Q4MTAiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBdUJ5QjtBQUNqQjtBQUNBO0FBQ0EsaUJBQUcsQ0FBQ0EsZUFBZUMsT0FBZixDQUF1QixLQUF2QixDQUFKLEVBQW1DRCxlQUFlRSxPQUFmLENBQXVCLEtBQXZCLEVBQThCLHlCQUFlLEtBQUtDLEtBQUwsQ0FBV0MsSUFBMUIsQ0FBOUI7QUFDdEM7OztrQ0FFUTs7QUFFTCxpQkFBTUMsY0FBYztBQUNoQkMscUJBQUk7QUFDQUMsZ0NBQVc7QUFEWDtBQURZLGNBQXBCOztBQU1BLG9CQUNLO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFFSSw2REFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSx1Q0FBOUIsR0FGSjtBQUdJLDZEQUFNLEtBQUksWUFBVixFQUF1QixNQUFLLG9EQUE1QjtBQUhKLGtCQURIO0FBT0c7QUFBQTtBQUFBLHVCQUFLLFdBQVUsUUFBZjtBQUNJLDREQUFLLFdBQVUsYUFBZixHQURKO0FBRUk7QUFBQTtBQUFBLDJCQUFLLFdBQVUsYUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFLLGtDQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJDO0FBQTVCLDBCQURKO0FBRUksZ0VBQUssS0FBSyxLQUFLTixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJFLFFBQWpDLEVBQTJDLFdBQVUsVUFBckQsR0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQWEsa0NBQUtQLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qkc7QUFBcEM7QUFISixzQkFGSjtBQU9JO0FBQUE7QUFBQSwyQkFBSyxXQUFVLGNBQWY7QUFDSTtBQUFBO0FBQUEsK0JBQUksT0FBT04sWUFBWUMsRUFBdkI7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBNkIsc0NBQUtILEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qkk7QUFBcEQsOEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBNEIsc0NBQUtULEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qks7QUFBbkQsOEJBRko7QUFHSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBOEIsc0NBQUtWLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qk07QUFBckQsOEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBNkIsc0NBQUtYLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qk87QUFBcEQsOEJBSko7QUFLSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBcUMsc0NBQUtaLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QlE7QUFBNUQsOEJBTEo7QUFNSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBdUMsc0NBQUtiLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QlM7QUFBOUQsOEJBTko7QUFPSTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFKO0FBQUE7QUFBOEIsc0NBQUtkLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QlU7QUFBckQ7QUFQSiwwQkFESjtBQVVJO0FBQUE7QUFBQSwrQkFBTSxNQUFLLEdBQVg7QUFBQTtBQUFBO0FBVko7QUFQSjtBQVBILGNBREw7QUE4Qkg7Ozs7O3FCQWhFOEJDLEssU0FBQUEsSzs7Ozs7O0FBQzNCO0FBQ01DLG1DLEdBQUtELE1BQU1DLEU7O3FDQUNiQyxRQUFRQyxPOzs7Ozs7d0NBRVUsZ0JBQU1DLEdBQU4sQ0FBVSw4REFBVixDOzs7QUFBWkMsb0M7a0VBQ0M7QUFDSHBCLDJDQUFNb0IsSUFBSXBCLElBRFA7QUFFSDtBQUNBSSwrQ0FBVWdCLElBQUlwQixJQUFKLENBQVNJLFFBQVQsQ0FBa0JpQixNQUFsQixDQUF5QjtBQUFBLGdEQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEsc0NBQXpCO0FBSFAsa0M7OztBQU1QO0FBQ0E7QUFDTVEsd0MsR0FBVUMsS0FBS0MsS0FBTCxDQUFXOUIsZUFBZUMsT0FBZixDQUF1QixLQUF2QixDQUFYLEM7QUFDaEI7O2tFQUNPLEVBQUNPLFVBQVVvQixRQUFRcEIsUUFBUixDQUFpQmlCLE1BQWpCLENBQXdCO0FBQUEsZ0RBQUtDLEVBQUVDLFFBQUYsSUFBY1AsRUFBbkI7QUFBQSxzQ0FBeEIsQ0FBWCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FqQlUsZ0JBQU1XLFMiLCJmaWxlIjoiMi5mMDFiM2YyOWNiNzcxODNhNTgyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtxdWVyeX0pIHtcbiAgICAgICAgLy8gR2V0IGlkIGZyb20gcXVlcnlcbiAgICAgICAgY29uc3QgaWQgPSBxdWVyeS5pZDtcbiAgICAgICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgLy8gU3RpbGwgb24gdGhlIHNlcnZlciBzbyBtYWtlIGEgcmVxdWVzdFxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByZXMuZGF0YSxcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgICAgICAgICAgc3RhbmRpbmc6IHJlcy5kYXRhLnN0YW5kaW5nLmZpbHRlcihzID0+IHMucG9zaXRpb24gPT0gaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciBqdXN0IG5hdmlnYXRpbmcgc28gdXNlXG4gICAgICAgICAgICAvLyB0aGUgY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGJwbERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKTtcbiAgICAgICAgICAgIC8vIEZpbHRlciBhbmQgcmV0dXJuIGRhdGEgYmFzZWQgb24gcXVlcnlcbiAgICAgICAgICAgIHJldHVybiB7c3RhbmRpbmc6IGJwbERhdGEuc3RhbmRpbmcuZmlsdGVyKHMgPT4gcy5wb3NpdGlvbiA9PSBpZCl9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIC8vIENhY2hlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIGlmXG4gICAgICAgIC8vIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgICAgICBpZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRldGFpbFN0eWxlID0ge1xuICAgICAgICAgICAgdWw6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgKFxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTgtMjRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNC0yNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnRlYW1OYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5jcmVzdFVSSX0gY2xhc3NOYW1lPVwicHVyZS1pbWdcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UG9pbnRzOiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wb2ludHN9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEyLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e2RldGFpbFN0eWxlLnVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2Fsczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZ29hbHN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XaW5zPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS53aW5zfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+TG9zc2VzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5sb3NzZXN9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5EcmF3czwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0uZHJhd3N9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FscyBBZ2FpbnN0PC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc0FnYWluc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FsIERpZmZlcmVuY2U8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLmdvYWxEaWZmZXJlbmNlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UGxheWVkPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wbGF5ZWRHYW1lc308L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxuICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9kZXRhaWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==