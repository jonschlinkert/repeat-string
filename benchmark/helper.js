'use strict';

var fs = require('fs');
var path = require('path');
var repeat = require('repeat-string');
var isObject = require('isobject');
var text = require('text-table');
var table = [];

function bench() {
  var filepath = path.join(__dirname, 'last.md');
  var str = fs.readFileSync(filepath, 'utf8');
  var sections = str.split(/\n(?=\n?(?:# benchmark))/);
  sections.shift();

  var len = sections.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    parseSection(sections[idx].trim());
  }

  return text(table);
}

function parseSection(str) {
  var lines = str.split('\n').filter(Boolean);
  lines.pop();

  if (!lines.length) return;
  var heading = lines.shift().trim();
  var m = /^.*\/fixtures\/([^(]+)/.exec(heading);

  var title = (m ? m[1] : heading).trim();
  var tok = {title: title};
  tok.title = path.basename(title, path.extname(title)) + 'x';

  return createLines(tok, lines);
}

function createLines(tok, lines) {
  var len = lines.length;
  var idx = -1;
  while (++idx < len) {
    var line = lines[idx];

    var obj = parseStats(line);
    tok[obj.name] = obj;
  }

  var vals = values(tok);
  var max = Math.max.apply(Math, vals);

  table.push([], ['# ' + tok.title])
  for (var key in tok) {
    if (tok.hasOwnProperty(key)) {
      if (isObject(tok[key])) {
        table.push(format(tok[key], max, 100));
      }
    }
  }
}

function format(tok, max, diff) {
  return [tok.name.trim(), bar(tok, max, diff).trim(), '(' + tok.val + ' ops/sec)'];
}

function parseStats(line) {
  var str = line.trim();
  var m = /^([^ ]+) x ([\d,.]+)/.exec(str);
  var tok = {num: 0, val: ''};
  if (!m) return tok;
  tok.name = m[1];
  tok.val = m[2];
  tok.num = String(tok.val).split(',').join('');
  return tok;
}

function values(obj) {
  var vals = [];
  for (var key in obj) {
    if (key === 'title') continue;
    vals.push(obj[key].num);
  }
  return vals;
}

function bar(tok, longest) {
  return repeat('█', (tok.num / longest) * 25);
}

/**
 * Expose `.bench` helper
 */

module.exports.bench = bench;
