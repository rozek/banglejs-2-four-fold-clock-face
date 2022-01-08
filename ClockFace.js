(function () {
  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    g.setColor(Settings.Foreground === 'Theme' ? Theme.fg : Settings.Foreground || '#000000');

    if (Settings.Font == null) {
      g.setFont('Vector', 22);
    } else {
      g.setFont(Settings.Font, Settings.FontScale || 1);
    }

    let roman = Settings.romanNumerals;

    g.setFontAlign(0,-1);
    g.drawString(roman ? 'XII' : '12', CenterX,CenterY-outerRadius);

    g.setFontAlign(1,0);
    g.drawString(roman ? 'III' : '3', CenterX+outerRadius,CenterY);

    g.setFontAlign(0,1);
    g.drawString(roman ? 'VI' : '6', CenterX,CenterY+outerRadius);

    g.setFontAlign(-1,0);
    g.drawString(roman ? 'IX' : '9', CenterX-outerRadius,CenterY);
  };
})();
