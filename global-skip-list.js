module.exports = [
    '@clr/ui',
    p => p.startsWith('ng-zorro-antd/graph'),
    p => p.startsWith('d3'),
    p => p.startsWith('ng-zorro-antd/cron-expression')
];
