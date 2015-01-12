if (!window.JST) {
  window.JST = {};
}
window.JST["assets/templates/test.jst"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<h1>SUPER</h1>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/_core/not_found/templates/page"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('    <div class="error-template text-center">\n      <h1>Oops!</h1>\n      <h2 class="text-danger">404 Not Found</h2>\n      <div class="error-details">\n        Sorry, an error has occured, Requested page not found!\n      </div>\n      <div class="error-actions">\n        <a href="/dashboard" class="btn btn-outline btn-primary btn-lg">\n          <i class="fa fa-home"></i>\n          Take Me Home \n        </a>\n        <a href="mailto:support@antikobpae.com" class="btn btn-outline btn-info btn-lg">\n          <i class="fa fa-envelope"></i>\n          Contact Support\n        </a>\n      </div>\n    </div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard/show/templates/show_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<h3 class="page-header">\n    Dashboard <small>widgets &amp; statistics</small>\n</h3>\n<div id="dashboard-apps-region"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_apps/list/templates/_app"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="panel panel-'));
    
      _print(this.color);
    
      _print(_safe('">\n    <div class="panel-heading">\n        <div class="row">\n            <div class="col-xs-3">\n                <i class="fa '));
    
      _print(this.icon);
    
      _print(_safe(' fa-5x"></i>\n            </div>\n            <div class="col-xs-9 text-right">\n                <div class="huge">'));
    
      _print(this.count);
    
      _print(_safe('</div>\n                <div>'));
    
      _print(this.count_label);
    
      _print(_safe('</div>\n            </div>\n        </div>\n    </div>\n    <a href="'));
    
      _print(this.route);
    
      _print(_safe('">\n        <div class="panel-footer">\n            <span class="pull-left">'));
    
      _print(this.name);
    
      _print(_safe('</span>\n            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>\n            <div class="clearfix"></div>\n        </div>\n    </a>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_apps/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="col-md-12">\n    <div class="well empty text-center text-muted">\n        No apps yet\n    </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_apps/list/templates/apps"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="apps" class="row"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_documents/list/templates/_document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i>\n<span class="name"></span>\n<span class="pull-right text-muted updated_at"></span>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_documents/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No documents found\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_documents/list/templates/documents"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<!-- BEGIN PORTLET-->\n<div class="portlet solid grey-cararra">\n    <div class="portlet-title">\n        <div class="caption">\n            <i class="fa fa-folder"></i> \n            <span class="caption-subject"> Latest Documents</span>\n            <span class="caption-helper">4 entries</span>\n        </div>\n        <div class="actions">\n            <a class="btn btn-circle btn-default" href="#">\n                <i class="fa fa-plus"></i>\n                Add\n            </a>\n        </div>\n    </div>\n    <div class="portlet-body">\n        <div id="dashboard-documents" class="list-group dropdown-tasks no-margin"></div>\n    </div>\n</div>\n<!-- END PORTLET-->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_scans/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No scans found\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_scans/list/templates/_scan"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var _i, _ref, _results,
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
    
      _print(_safe('  <span class="scan clearfix">\n    <i class="fa fa-bar-chart-o"></i>\n    <span class="desc name"></span>\n    <span class="percent sprogress"></span>\n  </span>\n  <div class="progress '));
    
      if (_ref = this.progress, __indexOf.call((function() {
        _results = [];
        for (_i = 0.01; _i <= 99.99; _i++){ _results.push(_i); }
        return _results;
      }).apply(this), _ref) >= 0) {
        _print('progress-striped active');
      }
    
      _print(_safe('">\n    <div style="width: '));
    
      _print(this.progress);
    
      _print(_safe('%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="'));
    
      _print(this.progress);
    
      _print(_safe('" role="progressbar" class="progress-bar progress-bar-primary">\n      <span class="sr-only sprogress"></span>\n    </div>\n  </div>\n'));
    
      if (this.progress < 100) {
        _print(_safe('\n  <span class="text-info">\n    <i class="fa fa-spinner fa-spin"></i> \n    <span class="count_pending"></span> \n  </span>\n'));
      }
    
      _print(_safe('\n  <span class="text-success">\n    <i class="fa fa-check"></i> \n    <span class="count_passed"></span>\n  </span>\n  <span class="text-warning">\n    <i class="fa fa-warning"></i> \n    <span class="count_suspicious"></span>\n  </span>\n  <span class="text-danger">\n    <i class="fa fa-times"></i> \n    <span class="count_plagiarized"></span>\n  </span>\n  <span class="text-muted">/ \n    <i class="fa fa-files-o"></i> \n    <span class="count_documents"></span>\n  </span>\n  <span class="text-muted pull-right">\n    <i class="fa fa-paste"></i> \n    <span class="count_similarities"></span>\n    / <i class="fa fa-link"></i> \n    <span class="count_sources"></span>\n  </span>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_scans/list/templates/scans"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<!-- BEGIN PORTLET-->\n<div class="portlet solid grey-cararra">\n    <div class="portlet-title line">\n        <div class="caption">\n            <i class="fa fa-tasks"></i>\n            <span class="caption-subject"> Latest Scans</span>\n            <span class="caption-helper">2 entries</span>\n        </div>\n        <div class="actions">\n            <a class="btn btn-circle btn-default" href="#">\n                <i class="fa fa-plus"></i>\n                Add\n            </a>\n        </div>\n    </div>\n    <div class="portlet-body">\n        <div id="dashboard-scans" class="list-group dropdown-tasks no-margin"></div>\n    </div>\n</div>\n<!-- END PORTLET-->\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/dashboard_stats/show/templates/stats"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat blue-madison">\n        <div class="visual">\n            <i class="fa fa-database fa-icon-medium"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.documents.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                 Document'));
    
      if (this.documents > 1) {
        _print("s");
      }
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat purple-plum">\n        <div class="visual">\n            <i class="fa fa-globe"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.webpages.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                 Webpage'));
    
      if (this.webpages > 1) {
        _print("s");
      }
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat grey-cascade">\n        <div class="visual">\n            <i class="fa fa-bar-chart-o"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.scanfiles.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                 Scanned Document'));
    
      if (this.scanfiles > 1) {
        _print("s");
      }
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat green-haze">\n        <div class="visual">\n            <i class="fa fa-share-alt fa-icon-medium"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.connections.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                 Connection'));
    
      if (this.connections > 1) {
        _print("s");
      }
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat yellow-casablanca">\n        <div class="visual">\n            <i class="fa fa-paste fa-icon-medium"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.similarities.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                 Similarit'));
    
      _print(this.similarities > 1 ? "ies" : "y");
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">\n    <div class="dashboard-stat red-intense">\n        <div class="visual">\n            <i class="fa fa-spinner fa-spin fa-icon-medium"></i>\n        </div>\n        <div class="details">\n            <div class="number">\n                '));
    
      _print(this.tasks.toLocaleString());
    
      _print(_safe('\n            </div>\n            <div class="desc">\n                Pending Task'));
    
      if (this.tasks > 1) {
        _print("s");
      }
    
      _print(_safe('\n            </div>\n        </div>\n        <a href="#" class="more">\n        View more <i class="m-icon-swapright m-icon-white"></i>\n        </a>\n    </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/list/templates/_document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<td>\n    <i class="fa fa-'));
    
      _print(this.icon());
    
      _print(_safe('"></i>\n  <a href="/documents/'));
    
      _print(this.id);
    
      _print(_safe('">\n    <span class="name"></span>\n  </a>\n</td>\n<td data-order="'));
    
      _print(this.attachment_file_size);
    
      _print(_safe('">\n  <span class="size"></span>\n</td>\n<td class="text-muted" data-order="'));
    
      _print(+this.created_at);
    
      _print(_safe('">\n  <span class="updated_at"></span>\n  <div class="btn-toolbar pull-right" role="toolbar">\n    <div class="btn-group">\n      <a href="/documents/'));
    
      _print(this.id);
    
      _print(_safe('/edit" class="text-muted btn btn-sm btn-default">\n        <i class="fa fa-edit"></i>\n      </a>\n      <a href="/documents/'));
    
      _print(this.id);
    
      _print(_safe('/delete" class="text-muted btn btn-sm btn-default">\n        <i class="fa fa-times"></i>\n      </a>\n    </div>\n  </div>\n</td>\n\n<!--i class="fa fa-'));
    
      _print(this.icon());
    
      _print(_safe('"></i>\n<span class="name"></span>\n<span class="pull-right">\n  <span class="updated_at"></span>\n  <a href="#documents/'));
    
      _print(this.id);
    
      _print(_safe('/edit" class="text-muted">\n    <i class="fa fa-edit"></i>\n  </a>\n</span-->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No scans found\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/list/templates/documents"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="page-wrapper">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">\n        <i class="fa fa-folder-open"></i> My Documents\n        <span class="pull-right">\n          <div class="dropdown">\n            <a href="#" class="text-muted dropdown-toggle" data-toggle="dropdown"><i class="fa fa-plus"></i></a>\n            <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">\n              <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-upload"></i> Upload a file</a></li>\n              <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-globe"></i> Import webpage</a></li>\n              <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file"></i> Create a new document</a></li>\n              <li class="divider"></li>\n              <li><a role="menuitem" tabindex="-1" class="new_folder" href="#folders/'));
    
      _print("@id");
    
      _print(_safe('/new"><i class="fa fa-folder"></i> Create a new folder</a></li>\n              <li class="divider"></li>\n              <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-paste"></i> Paste from web clipboard</a></li>\n            </ul>\n          </div>\n        </span>\n      </h1>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n\n  <div class="row">\n    <div id="documents" class="col-lg-12 anchor">\n        <table class="table table-hover">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Size</th>\n              <th>Modified</th>\n            </tr>\n          </thead>\n          <tbody>\n          </tbody>\n        </table>\n      </div>\n    <!-- /.col-lg-12 -->\n  </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/new/templates/new_document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<ul class="breadcrumb">\n  <li><a href="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</a></li>\n  <li><a href="/documents"><i class="fa fa fa-folder-open"></i> Document</a></li>\n  <li class="active"><i class="fa fa-plus"></i> New</li>\n</ul>\n\n<div id="page-wrapper">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">\n        <i class="fa fa-plus"></i> New Scan\n        <span class="pull-right">\n          <a href="#scans" class="text-muted"><i class="fa fa-times"></i></a>\n        </span>\n      </h1>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n\n  <div class="row">\n    <div class="col-lg-12">\n      <form class="form-horizontal" role="form">\n        <div class="col-sm-6">\n          <div class="form-group">\n            <label for="name" class="col-sm-2 control-label">Label</label>\n            <div class="col-sm-10">\n              <input id="name" class="form-control" type="text" placeholder="Scan Reference" />\n              <p class="help-block"></p>\n            </div>\n          </div>\n        </div>\n        <div class="col-sm-6">\n          <div class="btn-group btn-group-justified">\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-upload"></i>\n                <span class="hidden-sm hidden-xs">Upload</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-globe"></i>\n                <span class="hidden-sm hidden-xs">Webpage</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-file"></i>\n                <span class="hidden-sm hidden-xs">Create</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-primary">\n                <i class="fa fa-check"></i>\n                <span class="hidden-sm hidden-xs">Start</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n\n  <div class="row">\n    <div class="col-lg-12">\n      <table class="table table-hover" id="dataTable">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Size</th>\n            <th>Modified</th>\n          </tr>\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/show/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button class="btn btn-fit-height grey-salt" type="button"\n      data-toggle="tooltip"\n      data-placement="top"\n      title="Print">\n  <i class="fa fa-print"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Print</span-->\n</button>\n<button \n  data-close-others="true" \n  data-delay="1000" \n  data-toggle="dropdown" \n  data-placement="top"\n  title="Download"\n  class="btn btn-fit-height grey-salt" type="button">\n  <i class="fa fa-download"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">\n    Download\n    <i class="fa fa-angle-down"></i>\n  </span-->\n</button>\n<ul class="dropdown-menu pull-right" role="menu">\n  <li><a href="#"><i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i> Download original ('));
    
      _print(this.attachment_file_type);
    
      _print(_safe(') </a></li>\n  <li><a href="#"><i class="fa fa-file-text"></i> Download plain text</a></li>\n  <li><a href="#"><i class="fa fa-file-pdf-o"></i> Download PDF</a></li>\n  <li><a href="#"><i class="fa fa-globe"></i> Download HTML</a></li>\n  <li class="divider"></li>\n  <li><a href="#"><i class="fa fa-code"></i> Embed document</a></li>\n</ul>\n<button class="btn btn-fit-height grey-salt" type="button"\n  data-toggle="tooltip"\n  data-placement="top"\n  title="Edit">\n  <i class="fa fa-edit"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Edit</span-->\n</button>\n<button class="btn btn-fit-height grey-salt" type="button"\n  data-toggle="tooltip"\n  data-placement="top"\n  title="Delete">\n  <i class="fa fa-times"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Delete</span-->\n</button>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/documents/show/templates/document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var tag;
    
      _print(_safe('<!--h3 class="page-title">\n  <span class="name"></span>\n  <span class="pull-right">\n    <div class="dropdown">\n      <a href="#" class="text-muted"><i class="fa fa-print"></i></a>\n      <a href="#" class="text-muted dropdown-toggle" data-toggle="dropdown"><i class="fa fa-download"></i></a>\n      <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i> Download original ('));
    
      _print(this.attachment_file_type);
    
      _print(_safe(') </a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file-text"></i> Download plain text</a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file-pdf-o"></i> Download PDF</a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-globe"></i> Download HTML</a></li>\n        <li class="divider"></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-code"></i> Embed document</a></li>\n      </ul>\n      <a href="#" class="text-muted"><i class="fa fa-edit"></i></a>\n      <a href="#" class="text-muted"><i class="fa fa-times"></i></a>\n    </div>\n  </span>\n</h3-->\n'));
    
      if (this.attachment_file_type === 'pdf') {
        _print(_safe('\n  <!--iframe id="preview" class="col-lg-12 well no-padding" height="450px"\n    width="100%" src="/documents/'));
        _print(this.id);
        _print(_safe('/download.pdf"-->\n  <canvas id="preview" class="col-lg-12 well no-padding"/>\n'));
      } else {
        _print(_safe('\n  '));
        tag = this.text_only ? 'pre' : 'div';
        _print(_safe('\n  <'));
        _print(tag);
        _print(_safe(' class="content">\n    '));
        _print(_safe(this.content.text));
        _print(_safe('\n  </'));
        _print(tag);
        _print(_safe('>\n'));
      }
    
      _print(_safe('\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_documents/new/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button class="btn btn-fit-height btn-primary create-folder-document" type="button">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">Import</span>\n</button>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_documents/new/templates/new_document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<form class="form" role="form">\n  <div class="form-group">\n    <div class="input-group ">\n      <span class="input-group-addon">\n        <i class="fa fa-tag"></i>\n        <span class="hidden-xs">\n          Document Name\n        </span>\n      </span>\n      <input type="text" class="form-control" id="name" placeholder="Document name">\n    </div>\n    <p class="help-block"></p>\n  </div>\n  <div class="form-group">\n      <p class="help-block"></p>\n      <textarea class="form-control ckeditor" id="content">\n      \n      </textarea>\n  </div>\n</form>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_documents/new/templates/new_webpage"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<form class="form" role="form">\n    <div class="form-group">\n      <div class="input-group">\n        <span class="input-group-addon">\n          <i class="fa fa-globe"></i>\n          <span class="hidden-xs">\n            Webpage URL\n          </span>\n        </span>\n        <input type="text" class="form-control attachment_file_name" placeholder="Webpage URL">\n      </div>\n      <p class="help-block"></p>\n    </div>\n    <div class="form-group">\n      <p class="help-block"></p>\n      <iframe src="" id="preview" class="col-lg-12 well no-padding" height="450px" width="100%">\n        <html>\n          <body>\n            <div class="well">\n              <p>\n                Preview\n              </p>\n            </div>\n          </body>\n        </html>\n      </iframe>\n    </div>\n  </div>\n</form>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_files/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No documents found\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_files/list/templates/_file"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<td data-order="'));
    
      _print(this.type);
    
      _print(_safe('">\n  <i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i>\n</td>\n<td>\n  <a href="'));
    
      _print(this.url);
    
      _print(_safe('">\n    <span class="name"></span>\n  </a>\n</td>\n<td class="" data-order="'));
    
      _print(this.attachment_file_size);
    
      _print(_safe('">\n  <span class="size"></span>\n</td>\n<td class="hidden-xs text-muted" data-order="'));
    
      _print(+this.created_at);
    
      _print(_safe('">\n  <span class="updated_at"></span>\n  <!--div class="btn-toolbar pull-right" role="toolbar">\n    <div class="btn-group">\n      <a href="/documents/'));
    
      _print(this.id);
    
      _print(_safe('/edit" class="text-muted btn btn-sm btn-default">\n        <i class="fa fa-edit"></i>\n      </a>\n      <a href="/documents/'));
    
      _print(this.id);
    
      _print(_safe('/delete" class="text-muted btn btn-sm btn-default">\n        <i class="fa fa-times"></i>\n      </a>\n    </div>\n  </div-->\n</td>\n<td>\n  <span class="label label-sm '));
    
      _print(this.status_class());
    
      _print(_safe(' status">Unknown</span>\n</td>\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folder_files/list/templates/files"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="row">\n  <div id="files" class="col-lg-12 anchor">\n    <table class="table table-hover">\n      <thead>\n        <tr>\n          <th></th>\n          <th>Name</th>\n          <th class="">Size</th>\n          <th class="hidden-xs">Modified</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    </table>\n  </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/new/templates/new_folder"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<ul class="breadcrumb">\n  <li><a href="/dashboard"><i class="fa fa-dashboard"></i> Dashboard</a></li>\n  <li><a href="/documents"><i class="fa fa fa-folder-open"></i> Document</a></li>\n  <li class="active"><i class="fa fa-plus"></i> New</li>\n</ul>\n\n<div id="page-wrapper">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">\n        <i class="fa fa-plus"></i> New Scan\n        <span class="pull-right">\n          <a href="#scans" class="text-muted"><i class="fa fa-times"></i></a>\n        </span>\n      </h1>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n\n  <div class="row">\n    <div class="col-lg-12">\n      <form class="form-horizontal" role="form">\n        <div class="col-sm-6">\n          <div class="form-group">\n            <label for="name" class="col-sm-2 control-label">Label</label>\n            <div class="col-sm-10">\n              <input id="name" class="form-control" type="text" placeholder="Scan Reference" />\n              <p class="help-block"></p>\n            </div>\n          </div>\n        </div>\n        <div class="col-sm-6">\n          <div class="btn-group btn-group-justified">\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-upload"></i>\n                <span class="hidden-sm hidden-xs">Upload</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-globe"></i>\n                <span class="hidden-sm hidden-xs">Webpage</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-default">\n                <i class="fa fa-file"></i>\n                <span class="hidden-sm hidden-xs">Create</span>\n              </button>\n            </div>\n            <div class="btn-group">\n              <button type="button" class="btn btn-primary">\n                <i class="fa fa-check"></i>\n                <span class="hidden-sm hidden-xs">Start</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n\n  <div class="row">\n    <div class="col-lg-12">\n      <table class="table table-hover" id="dataTable">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Size</th>\n            <th>Modified</th>\n          </tr>\n        </thead>\n        <tbody>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/show/templates/_breadcrumb"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      if (this.parent_id) {
        _print(_safe('\n  <a href="/folders/'));
        _print(this.id);
        _print(_safe('" class="">\n    <i class="fa fa-folder-open"></i>\n    <span class="name">'));
        _print(this.name);
        _print(_safe('</span>\n  </a>\n'));
      } else {
        _print(_safe('\n  <a href="/dashboard">\n    <i class="fa fa-dashboard"></i>\n    Dashboard\n  </a>\n'));
      }
    
      _print(_safe('\n\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/show/templates/_folder"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<!--h3 class="page-title">\n    <span class="name">'));
    
      _print(this.name);
    
      _print(_safe('</span>\n</h3-->\n\n<!--h1 class="page-header">\n  <i class="fa fa-folder-open"></i> \n  <span class="name">'));
    
      _print(this.name);
    
      _print(_safe('</span>\n  <span class="pull-right">\n    <div class="dropdown">\n    </div>\n  </span>\n</h1-->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/show/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button \n  data-close-others="true" \n  data-delay="1000" \n  data-hover="dropdown" \n  data-toggle="dropdown" \n  class="btn btn-fit-height grey-salt dropdown-toggle" type="button">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">Add</span>\n</button>\n<ul class="dropdown-menu pull-right" role="menu">\n  <li>\n    <a class="new-folder-upload clearfix" href="#'));
    
      _print(this.url);
    
      _print(_safe('/documents/new"\n      data-toggle="tooltip"\n      data-placement="left"\n      title="'));
    
      _print(this.upload_runtime);
    
      _print(_safe('">\n      <i class="fa fa-upload"></i>\n      Upload document(s)\n    </a>\n  </li>\n  <li>\n    <a role="menuitem" tabindex="-1" class="new-folder-webpage" href="'));
    
      _print(this.url);
    
      _print(_safe('/documents/new/webpage">\n      <i class="fa fa-globe"></i>\n      Import a webpage\n    </a>\n  </li>\n  <li>\n    <a role="menuitem" tabindex="-1" class="new-folder-document" href="'));
    
      _print(this.url);
    
      _print(_safe('/documents/new">\n      <i class="fa fa-file-text-o"></i>\n        Create a new document\n    </a>\n  </li>\n  <li class="divider"></li>\n  <li>\n    <a role="menuitem" tabindex="-1" class="new-folder-folder" href="'));
    
      _print(this.url);
    
      _print(_safe('/folders/new">\n    <i class="fa fa-folder"></i> \n    Create a new folder</a>\n  </li>\n  <li class="divider"></li>\n  <li>\n    <a role="menuitem" tabindex="-1" href="#">\n      <i class="fa fa-paste"></i> \n      Paste from web clipboard\n    </a>\n  </li>\n</ul>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/show/templates/folder"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe(' \n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/folders/show/templates/show_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="folder-region" class="">\n</div>\n<div id="files-region" class="anchor">\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/footer/show/templates/show_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="navbar-text">\n    BambooJS - Under the <a href="http://www.gnu.org/">GNU General Public License v3.0</a>. \n</div>\n<div class="navbar-text pull-right">\n    <span class="go-top">\n        <i class="fa fa-angle-up"></i>\n    </span>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/header/list/templates/list_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('            <div class="_navbar-header">\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n                <a class="navbar-brand" href="index.html">\n                    <i class="fa icon-bamboo"></i> \n                    <span class="logo-start">Bamboo</span>\n                    <span class="logo-end">JS</span>\n                </a>\n            </div>\n            <!-- /.navbar-header -->\n\n            <ul class="nav navbar-top-links navbar-right">\n                <li class="dropdown">\n                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                        <i class="fa fa-envelope fa-fw"></i>  <i class="fa fa-caret-down"></i>\n                    </a>\n                    <ul class="dropdown-menu dropdown-messages">\n                        <li>\n                            <a href="#">\n                                <div>\n                                    <strong>John Smith</strong>\n                                    <span class="pull-right text-muted">\n                                        <em>Yesterday</em>\n                                    </span>\n                                </div>\n                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>\n                            </a>\n                        </li>\n                        <li class="divider"></li>\n                    </ul>\n                    <!-- /.dropdown-messages -->\n                </li>\n                <!-- /.dropdown -->\n                <li class="dropdown">\n                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                        <i class="fa fa-tasks fa-fw"></i>  <i class="fa fa-caret-down"></i>\n                    </a>\n                    <ul class="dropdown-menu dropdown-tasks">\n                        <li>\n                            <a href="#">\n                                <div>\n                                    <p>\n                                        <strong>Task 1</strong>\n                                        <span class="pull-right text-muted">40% Complete</span>\n                                    </p>\n                                    <div class="progress progress-striped active">\n                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">\n                                            <span class="sr-only">40% Complete (success)</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n\n                    </ul>\n                    <!-- /.dropdown-tasks -->\n                </li>\n                <!-- /.dropdown -->\n                <li class="dropdown">\n                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                        <i class="fa fa-bell fa-fw"></i>  <i class="fa fa-caret-down"></i>\n                    </a>\n                    <ul class="dropdown-menu dropdown-alerts">\n                        <li class="divider"></li>\n                        <li>\n                            <a class="text-center" href="#">\n                                <strong>See All Alerts</strong>\n                                <i class="fa fa-angle-right"></i>\n                            </a>\n                        </li>\n                    </ul>\n                    <!-- /.dropdown-alerts -->\n                </li>\n                <!-- /.dropdown -->\n                <li class="dropdown">\n                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>\n                    </a>\n                    <ul class="dropdown-menu dropdown-user">\n                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>\n                        </li>\n                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>\n                        </li>\n                        <li class="divider"></li>\n                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>\n                        </li>\n                    </ul>\n                    <!-- /.dropdown-user -->\n                </li>\n                <!-- /.dropdown -->\n            </ul>\n            <!-- /.navbar-top-links -->\n\n            <div id="sidebar-region" class="navbar-default sidebar" role="navigation">\n            </div>\n            <!-- /.navbar-static-side -->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/header_scans/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<p class="well empty text-center">\n  No scans found\n</p>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/header_scans/list/templates/_scan"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var _i, _j, _ref, _ref1, _results, _results1,
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
    
      _print(_safe('<a href="/scans/'));
    
      _print(this.id);
    
      _print(_safe('">\n  <span class="task">\n    <i class="fa fa-bar-chart-o"></i>\n    <span class="desc name"></span>\n    <span class="percent sprogress"></span>\n  </span>\n  <div class="progress '));
    
      if (_ref = this.progress, __indexOf.call((function() {
        _results = [];
        for (_i = 0.01; _i <= 99.99; _i++){ _results.push(_i); }
        return _results;
      }).apply(this), _ref) >= 0) {
        _print('progress-striped active');
      }
    
      _print(_safe('">\n    <div style="width: '));
    
      _print(this.progress);
    
      _print(_safe('%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="'));
    
      _print(this.progress);
    
      _print(_safe('" role="progressbar" class="progress-bar progress-bar-primary">\n      <span class="sr-only sprogress"></span>\n    </div>\n  </div>\n'));
    
      if (this.progress < 100) {
        _print(_safe('\n  <span class="text-info">\n    <i class="fa fa-spinner fa-spin"></i> \n    <span class="count_pending"></span> \n  </span>\n'));
      }
    
      _print(_safe('\n  <span class="text-success">\n    <i class="fa fa-check"></i> \n    <span class="count_passed"></span>\n  </span>\n  <span class="text-warning">\n    <i class="fa fa-warning"></i> \n    <span class="count_suspicious"></span>\n  </span>\n  <span class="text-danger">\n    <i class="fa fa-times"></i> \n    <span class="count_plagiarized"></span>\n  </span>\n  <span class="text-muted">/ \n    <i class="fa fa-files-o"></i> \n    <span class="count_documents"></span>\n  </span>\n  <span class="text-muted pull-right">\n    <i class="fa fa-paste"></i> \n    <span class="count_similarities"></span>\n    / <i class="fa fa-link"></i> \n    <span class="count_sources"></span>\n  </span>\n</a>\n\n<!--p>\n  <strong>\n    <i class="fa fa-bar-chart-o"></i> \n    <span class="name"></span>\n  </strong>\n  <span class="pull-right text-muted sprogress"></span>\n</p>\n<div class="progress '));
    
      if (_ref1 = this.progress, __indexOf.call((function() {
        _results1 = [];
        for (_j = 0.01; _j <= 99.99; _j++){ _results1.push(_j); }
        return _results1;
      }).apply(this), _ref1) >= 0) {
        _print('progress-striped active');
      }
    
      _print(_safe('">\n  <div style="width: '));
    
      _print(this.progress);
    
      _print(_safe('%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="'));
    
      _print(this.progress);
    
      _print(_safe('" role="progressbar" class="progress-bar progress-bar-primary">\n    <span class="sr-only sprogress"></span>\n  </div>\n</div>\n<p>\n'));
    
      if (this.progress < 100) {
        _print(_safe('\n  <span class="text-info">\n    <i class="fa fa-spinner fa-spin"></i> \n    <span class="count_pending"></span> \n  </span>\n'));
      }
    
      _print(_safe('\n  <span class="text-success">\n    <i class="fa fa-check"></i> \n    <span class="count_passed"></span>\n  </span>\n  <span class="text-warning">\n    <i class="fa fa-warning"></i> \n    <span class="count_suspicious"></span>\n  </span>\n  <span class="text-danger">\n    <i class="fa fa-times"></i> \n    <span class="count_plagiarized"></span>\n  </span>\n  <span class="text-muted">/ \n    <i class="fa fa-files-o"></i> \n    <span class="count_documents"></span>\n  </span>\n  <span class="text-muted pull-right">\n    <i class="fa fa-paste"></i> \n    <span class="count_similarities"></span>\n    / <i class="fa fa-link"></i> \n    <span class="count_sources"></span>\n  </span>\n</p-->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/header_scans/list/templates/scans"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<li>\n    <p>\n         You have 12 pending scans\n    </p>\n</li>\n<li>\n    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 250px;">\n        <ul id="header-scans" style="overflow: hidden; width: auto; height: 250px;" class="dropdown-menu-list scroller" data-initialized="1"></ul>\n        <div class="slimScrollBar" style="); width: 7px; position: absolute; top: 0px; border-radius: 7px; z-index: 99; right: 1px; height: 171.703px; display: none; opacity: 0.4;"></div>\n        <div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: none repeat scroll 0% 0% rgb(234, 234, 234); opacity: 0.2; z-index: 90; right: 1px;"></div>\n    </div>\n</li>\n<li class="external">\n    <a href="/scans">\n        See all scans\n        <i class="fa fa-angle-right"></i>\n    </a>\n</li>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No scans found\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/list/templates/_scan"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var _i, _ref, _results,
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
    
      _print(_safe('<h4 class="list-group-item-heading">\n  <i class="fa fa-bar-chart-o"></i> \n  <span class="name"></span>\n  <span class="pull-right text-muted sprogress"></span>\n</h4>\n<span class="task">\n  <!--span class="desc"> New release v1.2 </span>\n  <span class="percent"> 30% </span-->\n</span>\n<div class="progress '));
    
      if (_ref = this.progress, __indexOf.call((function() {
        _results = [];
        for (_i = 0.01; _i <= 99.99; _i++){ _results.push(_i); }
        return _results;
      }).apply(this), _ref) >= 0) {
        _print('progress-striped active');
      }
    
      _print(_safe('">\n  <div style="width: '));
    
      _print(this.progress);
    
      _print(_safe('%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="'));
    
      _print(this.progress);
    
      _print(_safe('" role="progressbar" class="progress-bar progress-bar-primary">\n    <span class="sr-only">100% Complete (success)</span>\n  </div>\n</div>\n<p>\n'));
    
      if (this.progress < 100) {
        _print(_safe('\n  <span class="text-info">\n    <i class="fa fa-spinner fa-spin"></i> \n    <span class="count_pending"></span> \n    <span class="hidden-sm hidden-xs">pending</span>\n  </span>\n'));
      }
    
      _print(_safe('\n  <span class="text-success">\n    <i class="fa fa-check"></i> \n    <span class="count_passed"></span>\n    <span class="hidden-sm hidden-xs">passed</span>\n  </span>\n  <span class="text-warning">\n    <i class="fa fa-warning"></i> \n    <span class="count_suspicious"></span>\n    <span class="hidden-sm hidden-xs">suspicous</span>\n  </span>\n  <span class="text-danger">\n    <i class="fa fa-times"></i> \n    <span class="count_plagiarized"></span>\n    <span class="hidden-sm hidden-xs">plagarized</span>\n  </span>\n  <span class="text-muted">/ \n    <i class="fa fa-files-o"></i> \n    <span class="count_documents"></span>\n    <span class="hidden-sm hidden-xs">documents</span>\n  </span>\n  <span class="text-muted pull-right">\n    <i class="fa fa-paste"></i> \n    <span class="count_similarities"></span>\n    <span class="hidden-sm hidden-xs">similarities found</span>\n    / <i class="fa fa-link"></i> \n    <span class="count_sources"></span>\n    <span class="hidden-sm hidden-xs">sources</span>\n  </span>\n</p>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/list/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<a href="/scans/new" class="btn btn-fit-height grey-salt dropdown-toggle">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">New Scan</span>\n</a>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/list/templates/scans"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="scans" class="list-group dropdown-tasks anchor"></div>\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/new/templates/_form"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<form class="form" role="form">\n  <div class="form-group">\n    <div class="input-group ">\n      <span class="input-group-addon">\n        <i class="fa fa-tag"></i>\n        <span class="hidden-xs">\n          Label\n        </span>\n      </span>\n      <input id="name" class="form-control" type="text" placeholder="Scan Reference" />\n    </div>\n    <p class="help-block"></p>\n  </div>\n</form>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/new/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button \n  data-close-others="true" \n  data-delay="1000" \n  data-hover="dropdown" \n  data-toggle="dropdown" \n  class="btn btn-fit-height grey-salt dropdown-toggle" type="button">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">Add Documents</span>\n</button>\n<ul class="dropdown-menu" role="menu">\n  <li>\n    <a class="new-folder-upload clearfix" href="#'));
    
      _print(this.url);
    
      _print(_safe('/documents/new"\n      data-toggle="tooltip"\n      data-placement="left"\n      title="'));
    
      _print(this.upload_runtime);
    
      _print(_safe('">\n      <i class="fa fa-upload"></i>\n      Upload document(s)\n    </a>\n  </li>\n  <li>\n    <a role="menuitem" tabindex="-1" class="new-folder-webpage" href="'));
    
      _print(this.url);
    
      _print(_safe('/documents/new/webpage">\n      <i class="fa fa-globe"></i>\n      Import a webpage\n    </a>\n  </li>\n  <li>\n    <a role="menuitem" tabindex="-1" class="new-folder-document" href="'));
    
      _print(this.url);
    
      _print(_safe('/documents/new">\n      <i class="fa fa-file-text-o"></i>\n        Create a new document\n    </a>\n  </li>\n  <li class="divider"></li>\n  <li>\n    <a role="menuitem" tabindex="-1" href="#">\n      <i class="fa fa-paste"></i> \n      Paste from web clipboard\n    </a>\n  </li>\n</ul>\n<button class="btn btn-fit-height btn-primary dropdown-toggle" type="button">\n  <i class="fa fa-check"></i>\n  <span class="hidden-xs">\n    Start !\n  </span>\n</button>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/scans/new/templates/new_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="form-region"></div>\n<div id="files-region"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<td colspan="7">\n  <div class="well text-center">\n    Sorry, no movies found!\n  </div>\n</td>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/_hero"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="hero-unit">\n  <h2>Go on! Get searching...</h2>\n  <p>Type in the search input above to find movie results.</p>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/_movie"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<td>\n  '));
    
      if (this.posters) {
        _print(_safe('\n    <div class="thumbnail">\n      <img src="'));
        _print(this.posters.thumbnail);
        _print(_safe('" />\n    </div>\n  '));
      }
    
      _print(_safe('\n</td>\n<td>'));
    
      _print(this.title);
    
      _print(_safe('</td>\n<td>'));
    
      _print(this.year);
    
      _print(_safe('</td>\n<td>'));
    
      _print(this.mpaa_rating);
    
      _print(_safe('</td>\n<td>'));
    
      _print(this.runtime);
    
      _print(_safe(' minutes</td>\n<td>'));
    
      _print(this.ratings.critics_score);
    
      _print(_safe('</td>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/_movies"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<table class="table table-striped table-bordered">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Title</th>\n      <th>Released</th>\n      <th>Rating</th>\n      <th>Runtime</th>\n      <th>Score</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/_panel"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<section class="lead">\n  <h3 class="pull-left">Search Movies</h3>\n  <form class="form-search pull-right">\n    <div class="input-append">\n      <input type="text" class="span4 search-query" placeholder="Search for a movie...">\n      <button type="submit" class="btn">Search</button>\n    </div>\n  </form>\n</section>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/search/list/templates/list_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="span12">\n  <div class="row">\n    <div id="panel-region"></div>\n    <div id="movies-region"></div>\n  </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar/show/templates/show_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="sidebar-nav navbar-collapse collapse">\n<ul class="nav" id="side-menu">\n    <li class="sidebar-search">\n        <div class="input-group custom-search-form">\n            <input type="text" class="form-control" placeholder="Search...">\n            <span class="input-group-btn">\n            <button class="btn btn-default" type="button">\n                <i class="fa fa-search"></i>\n            </button>\n        </span>\n        </div>\n        <!-- /input-group -->\n    </li>\n    <li>\n        <a class="active" href="/dashboard"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>\n    </li>\n    <li>\n        <a href="#"><i class="fa fa-book fa-fw"></i> Documentation<span class="fa arrow"></span></a>\n        <ul class="nav nav-second-level">\n            <li>\n                <a href="/docs/bamboo"><i class="fa icon-bamboo"></i> Bamboo</a>\n            </li>\n            <li>\n                <a href="/docs/sails">Sails</a>\n            </li>\n            <li>\n                <a href="/docs/bootstrap">Bootstrap</a>\n            </li>\n            <li>\n                <a href="#">Backbone / Marionette<span class="fa arrow"></span></a>\n                <ul class="nav nav-third-level">\n                    <li>\n                        <a href="#">Underscore</a>\n                    </li>\n                    <li>\n                        <a href="#">Underscore String</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone Validation</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone Associations</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone Stickit</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone Memento</a>\n                    </li>\n                    <li>\n                        <a href="#">Backbone Picky</a>\n                    </li>\n                    <li>\n                        <a href="#">Marionette</a>\n                    </li>\n                    <li>\n                        <a href="#">Marionette Subrouter</a>\n                    </li>\n                </ul>\n                <!-- /.nav-third-level -->\n        </ul>\n        <!-- /.nav-second-level -->\n    </li>\n    <li>\n        <a href="/apps"><i class="fa fa-cubes fa-fw"></i> Applications</a>\n    </li>\n    <li>\n        <a href="/widgets"><i class="fa fa-puzzle-piece fa-fw"></i> Widgets</a>\n    </li>\n    <li>\n        <a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>\n        <ul class="nav nav-second-level">\n            <li>\n                <a href="panels-wells.html">Panels and Wells</a>\n            </li>\n            <li>\n                <a href="buttons.html">Buttons</a>\n            </li>\n            <li>\n                <a href="notifications.html">Notifications</a>\n            </li>\n            <li>\n                <a href="typography.html">Typography</a>\n            </li>\n            <li>\n                <a href="icons.html"> Icons</a>\n            </li>\n            <li>\n                <a href="grid.html">Grid</a>\n            </li>\n        </ul>\n        <!-- /.nav-second-level -->\n    </li>\n    <li>\n        <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>\n        <ul class="nav nav-second-level">\n            <li>\n                <a href="#">Second Level Item</a>\n            </li>\n            <li>\n                <a href="#">Second Level Item</a>\n            </li>\n            <li>\n                <a href="#">Third Level <span class="fa arrow"></span></a>\n                <ul class="nav nav-third-level">\n                    <li>\n                        <a href="#">Third Level Item</a>\n                    </li>\n                    <li>\n                        <a href="#">Third Level Item</a>\n                    </li>\n                    <li>\n                        <a href="#">Third Level Item</a>\n                    </li>\n                    <li>\n                        <a href="#">Third Level Item</a>\n                    </li>\n                </ul>\n                <!-- /.nav-third-level -->\n            </li>\n        </ul>\n        <!-- /.nav-second-level -->\n    </li>\n    <li>\n        <a href="#"><i class="fa fa-files-o fa-fw"></i> Sample Pages<span class="fa arrow"></span></a>\n        <ul class="nav nav-second-level">\n            <li>\n                <a href="blank.html">Blank Page</a>\n            </li>\n            <li>\n                <a href="login.html">Login Page</a>\n            </li>\n        </ul>\n        <!-- /.nav-second-level -->\n    </li>\n</ul>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/_document"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<a href="'));
    
      _print(this.url);
    
      _print(_safe('">\n  <i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i>\n  '));
    
      _print(this.name);
    
      _print(_safe('\n</a>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/_documents"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe(' \n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<a href="#">\n  No documents found\n</a>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/_form"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->\n<!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->\n<!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->\n<form class="sidebar-search ">\n    <a class="remove" href="javascript:;">\n    <i class="fa fa-times"></i>\n    </a>\n    <div class="input-group">\n        <span class="input-group-btn">\n            <a class="btn clear" href="javascript:;"><i class="fa fa-times"></i></a>\n        </span>\n        <input type="text" placeholder="Search..." class="form-control">\n        <span class="input-group-btn">\n            <a class="btn submit" href="javascript:;"><i class="fa fa-search"></i></a>\n        </span>\n    </div>\n</form>\n<!-- END RESPONSIVE QUICK SEARCH FORM -->\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/_hero"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe(' \n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/sidebar_search/list/templates/list_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="form-region"></div>\n<div id="results-region"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="well empty text-center">\n  No users registered\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/list/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<a href="/users/delete" class="btn btn-fit-height btn-danger">\n  <i class="fa fa-trash-o"></i>\n  <span class="hidden-xs">Delete Selected</span>\n</a>\n<a href="/users/new" class="btn btn-fit-height btn-success">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">New User</span>\n</a>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/list/templates/_user"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<td data-order="'));
    
      _print(this.icon);
    
      _print(_safe('">\n  <i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i>\n</td>\n<td>\n  <a href="/users/'));
    
      _print(this.id);
    
      _print(_safe('">\n    <span class="name"></span>\n  </a>\n</td>\n<td class="hidden-xs" data-order="'));
    
      _print(this.email);
    
      _print(_safe('">\n  <span class="email"></span>\n</td>\n<td class="text-muted" data-order="'));
    
      _print(+this.created_at);
    
      _print(_safe('">\n  <span class="updated_at"></span>\n  <div class="btn-toolbar pull-right" role="toolbar">\n    <div class="btn-group btn-group-xs">\n      <a href="/users/'));
    
      _print(this.id);
    
      _print(_safe('/edit" class="btn grey-salt">\n        <i class="fa fa-edit"></i>\n      </a>\n      '));
    
      if (!this.is_admin) {
        _print(_safe('\n        <a href="#/users/'));
        _print(this.id);
        _print(_safe('/delete" class="btn red-intense delete">\n          <i class="fa fa-trash-o"></i>\n        </a>\n      '));
      }
    
      _print(_safe('\n    </div>\n  </div>\n</td>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/list/templates/users"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="anchor">\n  <table class="table table-hover">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Username</th>\n        <th class="hidden-xs">Email</th>\n        <th>Modified</th>\n      </tr>\n    </thead>\n    <tbody id="users"></tbody>\n  </table>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/new/templates/_form"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="form-group">\n  <label class="hidden-sm hidden-xs col-md-3 control-label">\n    Username\n  </label>\n  <div class="col-md-9">\n    <div class="input-group">\n      <span class="input-group-addon">\n        <i class="fa fa-tag"></i>\n      </span>\n      <input type="text" class="form-control" id="name" placeholder="Username">\n    </div>\n    <p class="help-block"></p>\n  </div>\n</div>\n\n<div class="form-group">\n  <label class="hidden-sm hidden-xs col-md-3 control-label">\n    Email\n  </label>\n  <div class="col-md-9">\n    <div class="input-group">\n      <span class="input-group-addon">\n        <i class="fa fa-envelope"></i>\n      </span>\n      <input type="text" class="form-control" id="email" placeholder="Email">\n    </div>\n    <p class="help-block"></p>\n  </div>\n</div>\n\n<div class="form-group">\n  <label class="hidden-sm hidden-xs col-md-3 control-label">\n    Password\n  </label>\n  <div class="col-md-9">\n    <div class="input-group">\n      <span class="input-group-addon">\n        <i class="fa fa-key"></i>\n      </span>\n      <input type="password" class="form-control" id="password" placeholder="Password">\n    </div>\n    <p class="help-block"></p>\n  </div>\n</div>\n\n<div class="form-group">\n  <label class="hidden-sm hidden-xs col-md-3 control-label">\n    Password (confirmation)\n  </label>\n  <div class="col-md-9">\n    <div class="input-group">\n      <span class="input-group-addon">\n        <i class="fa fa-key"></i>\n      </span>\n      <input type="password" class="form-control" id="password_confirmation" placeholder="Password (confirmation)">\n    </div>\n    <p class="help-block"></p>\n  </div>\n</div>\n\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/new/templates/_group"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button type="button" class="btn name" data-color="primary">'));
    
      _print(this.name);
    
      _print(_safe('</button>\n<input type="checkbox" class="belongs_to hidden" />\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/new/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button class="btn btn-fit-height btn-primary create-user" type="button">\n  <i class="fa fa-plus"></i>\n  <span class="hidden-xs">Create</span>\n</button>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/new/templates/new_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<form class="form-horizontal" role="form" action="#">\n\n  <div id="form-region"></div>\n\n  <div class="form-group">\n    <label class="col-md-3 control-label">\n      Member of these groups\n    </label>\n    <div id="groups-region" class="col-md-9">\n    </div>\n</form>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/new/templates/new_user"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<form class="form-horizontal" role="form">\n\n  <div class="form-group">\n    <label class="hidden-sm hidden-xs col-md-3 control-label">\n      Username\n    </label>\n    <div class="col-md-9">\n      <div class="input-group">\n        <span class="input-group-addon">\n          <i class="fa fa-tag"></i>\n        </span>\n        <input type="text" class="form-control" id="name" placeholder="Username">\n      </div>\n    </div>\n    <p class="help-block"></p>\n  </div>\n\n  <div class="form-group">\n    <label class="hidden-sm hidden-xs col-md-3 control-label">\n      Email\n    </label>\n    <div class="col-md-9">\n      <div class="input-group">\n        <span class="input-group-addon">\n          <i class="fa fa-envelope"></i>\n        </span>\n        <input type="text" class="form-control" id="email" placeholder="Email">\n      </div>\n    </div>\n    <p class="help-block"></p>\n  </div>\n\n  <div class="form-group">\n    <label class="hidden-sm hidden-xs col-md-3 control-label">\n      Password\n    </label>\n    <div class="col-md-9">\n      <div class="input-group">\n        <span class="input-group-addon">\n          <i class="fa fa-key"></i>\n        </span>\n        <input type="password" class="form-control" id="password" placeholder="Password">\n      </div>\n    </div>\n    <p class="help-block"></p>\n  </div>\n\n  <div class="form-group">\n    <label class="hidden-sm hidden-xs col-md-3 control-label">\n      Password (confirmation)\n    </label>\n    <div class="col-md-9">\n      <div class="input-group">\n        <span class="input-group-addon">\n          <i class="fa fa-key"></i>\n        </span>\n        <input type="password" class="form-control" id="password_confirmation" placeholder="Password (confirmation)">\n      </div>\n    </div>\n    <p class="help-block"></p>\n  </div>\n\n  <div class="form-group">\n    <label class="col-md-3 control-label">\n      Member of these groups\n    </label>\n    <div class="col-md-9">\n      <span class="btn-checkbox">\n        <button type="button" class="btn" data-color="primary">Admins</button>\n        <input type="checkbox" class="hidden" />\n      </span>\n    </div>\n</form>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/show/templates/_toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button class="btn btn-fit-height grey-salt" type="button"\n      data-toggle="tooltip"\n      data-placement="top"\n      title="Print">\n  <i class="fa fa-print"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Print</span-->\n</button>\n<button class="btn btn-fit-height grey-salt" type="button"\n  data-toggle="tooltip"\n  data-placement="top"\n  title="Edit">\n  <i class="fa fa-edit"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Edit</span-->\n</button>\n<button class="btn btn-fit-height grey-salt" type="button"\n  data-toggle="tooltip"\n  data-placement="top"\n  title="Delete">\n  <i class="fa fa-times"></i>\n  <!--span class="hidden-xs hidden-sm hidden-md">Delete</span-->\n</button>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/users/show/templates/user"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      var group, _i, _len, _ref;
    
      _print(_safe('<!--h3 class="page-title">\n  <span class="name"></span>\n  <span class="pull-right">\n    <div class="dropdown">\n      <a href="#" class="text-muted"><i class="fa fa-print"></i></a>\n      <a href="#" class="text-muted dropdown-toggle" data-toggle="dropdown"><i class="fa fa-download"></i></a>\n      <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i> Download original ('));
    
      _print(this.attachment_file_type);
    
      _print(_safe(') </a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file-text"></i> Download plain text</a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-file-pdf-o"></i> Download PDF</a></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-globe"></i> Download HTML</a></li>\n        <li class="divider"></li>\n        <li><a role="menuitem" tabindex="-1" href="#"><i class="fa fa-code"></i> Embed user</a></li>\n      </ul>\n      <a href="#" class="text-muted"><i class="fa fa-edit"></i></a>\n      <a href="#" class="text-muted"><i class="fa fa-times"></i></a>\n    </div>\n  </span>\n</h3-->\n<dl class="dl-horizontal">\n  <dt>Username</dt>\n  <dd><i class="fa fa-tag"></i> <span class="name"></span></dd>\n  <dt>Email</dt>\n  <dd><i class="fa fa-envelope"></i> <span class="email"></span></dd>\n  <dt>Password</dt>\n  <dd><i class="fa fa-key"></i> <span class="password">********</span></dd>\n  <dt>Member of these groups</dt>\n  <dd id="user-groups-region">\n    <ul class="fa-ul">\n      '));
    
      _ref = this.groups;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        group = _ref[_i];
        _print(_safe('\n        <li><i class="fa-li fa fa-group"></i> '));
        _print(group.name);
        _print(_safe('</li>\n      '));
      }
    
      _print(_safe('\n    </ul>\n  </dd>\n</dl>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/widgets/list/templates/_empty"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div class="col-md-12">\n    <div class="well empty text-center text-muted">\n        No widgets yet\n    </div>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/widgets/list/templates/_widget"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      if (this.type === "panel") {
        _print(_safe('\n  <div class="panel panel-'));
        _print(this.color);
        _print(_safe('">\n    <div class="panel-heading">\n      <h3 class="panel-title">\n        <i class="fa '));
        _print(this.icon);
        _print(_safe('"></i> '));
        _print(this.name);
        _print(_safe('</h3>\n    </div>\n    <div class="panel-body widget-region">\n    </div>\n  </div>\n'));
      } else if (this.type === 'icon') {
        _print(_safe('\n  <div class="btn-group btn-group-justified icon-widget" role="group">\n      <a href="#" class="btn btn-group-justified btn-lg btn-'));
        _print(this.color);
        _print(_safe('" data-toggle="tooltip"\n          data-placement="bottom" title="'));
        _print(this.name);
        _print(_safe('">\n        <i class="fa '));
        _print(this.icon);
        _print(_safe('"></i>\n        <span class="visible-xs">'));
        _print(this.name);
        _print(_safe('</span>\n      </a>\n  </div>\n'));
      } else {
        _print(_safe('\n  <div class="widget-region"></div>\n'));
      }
    
      _print(_safe('\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/apps/widgets/list/templates/widgets"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<h3 class="page-header">\n    Widgets <small>overview</small>\n</h3>\n<div id="widgets" class="row"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/components/breadcrumbs/templates/_breadcrumb"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<i class="fa fa-'));
    
      _print(this.icon);
    
      _print(_safe('"></i>\n'));
    
      if (!this.leaf) {
        _print(_safe('<a href="'));
        _print(this.url);
        _print(_safe('">'));
      }
    
      _print(_safe('\n  <span class="name">'));
    
      _print(this.name);
    
      _print(_safe('</span>\n'));
    
      if (!this.leaf) {
        _print(_safe('</a>'));
      }
    
      _print(_safe('\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/components/flash/templates/flash_view"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<button class="close" data-dismiss="alert", data-aria-hidden="true">&times;</button>\n'));
    
      _print(this.message);
    
      _print(_safe('\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/components/page/templates/page_layout"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<div id="page-title-region"></div>\n\n<div class="page-bar">\n    <div id="page-breadcrumbs-region" class="pull-left"></div>\n    <div id="page-toolbar-region" class="pull-right"></div>\n</div>\n\n<!--div class="flash-region"></div-->\n\n<div id="page-content-region"></div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/components/page/templates/title_view"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<h3 class="page-title">\n    <span class="title">'));
    
      _print(this.title);
    
      _print(_safe('</span>\n    <small class="subtitle">'));
    
      _print(this.subtitle);
    
      _print(_safe('</small>\n</h3>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};

if (!window.JST) {
  window.JST = {};
}
window.JST["assets/scripts/components/toolbar/templates/toolbar"] = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe(' \n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};
