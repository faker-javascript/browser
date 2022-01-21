export default function browser() {
    const browsers = [
        'Chrome',
        'Edge',
        'Firefox',
        'Internet Explorer',
        'Safari',
        'Opera',
        'Yandex',
        'Chromium',
        'Vivaldi',
        'Baidu',
        'Brave',
    ];
    return browsers[Math.floor(Math.random() * browsers.length)];
}
