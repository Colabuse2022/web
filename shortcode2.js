$(document).ready(function () {
    var bhf = ['divider', 'table', 'heading', 'row', 'col', 'image', 'tooltip', 'facebook', 'dailymotion', 'youtube', 'soundcloud', 'num', 'code', 'accordion', 'content', 'item', 'quote', 'alert', 'success', 'warning', 'update', 'info', 'tab', 'button'];
    $('.post-body').each(function () {
        var html = $(this).html();
        html = mbt(html);
        if (html != '') {
            $(this).html(html)
        }
    });
    $('.widget-content').each(function () {
        var html = $(this).html();
        html = mbt(html);
        if (html != '') {
            $(this).html(html)
        }
    });
    $('.comment').each(function () {
        var html = $(this).html();
        html = mbt(html);
        if (html != '') {
            $(this).html(html)
        }
    });
    function mbt(html) {
        var be = false;
        for (var i = 0; i < bhf.length; i++) {
            var aR = '[' + bhf[i];
            var bA = '<div class="shortcode sc-' + bhf[i] + '"';
            var bx = '[/' + bhf[i] + ']';
            var bb = '</div>';
            var aj = '/]';
            var bj = '></div>';
            var aT = 0;
            var bs = 0;
            var bF = 0;
            for (j = 0; j < 100; j++) {
                aT = html.indexOf(aR, aT);
                var aY = true;
                var k = '';
                if (aT != -1) {
                    var bq = html.indexOf(bx, aT);
                    var bH = html.indexOf(aj, aT);
                    if ((bq != -1 && bH == -1) || (bq != -1 && bH != -1 && bq < bH)) {
                        k = html.substring(aT, bq + bx.length);
                        k = k.replace(bx, bb);
                        bs = bq;
                        bF = bx.length
                    } else if ((bq == -1 && bH != -1) || (bq != -1 && bH != -1 && bq > bH)) {
                        k = html.substring(aT, bH + aj.length);
                        k = k.replace(bx, bj);
                        bs = bH;
                        bF = aj.length
                    } else {
                        aY = false
                    }
                } else {
                    break
                }
                if (aY) {
                    be = true;
                    k = k.replace(aR, bA);
                    k = k.replace(']', '>');
                    html = html.substring(0, aT) + k + html.substring(bs + bF)
                } else {}
                aT++
            }
        }
        if (be) {
            return html
        }
        return ''
    };
    var ou = 0;
    $('.sc-tab').each(function () {
        var aI = '';
        var bg = '';
        var aW = 0;
        $(this).find('.sc-content').each(function () {
            var M = $(this).attr('title');
            var ICI = $(this).attr('icon');
            var icd = '<i style="padding-right:5px;" class="fa ' + ICI + '"></i>';
            var B = $(this).html();
            if (M == null || M == '') {
                M = 'Tab'
            }
            if (ICI == null || ICI == '') {
                ICI = '';
                icd = ''
            }
            if (B == null || B == '') {
                B = 'I Love MBT'
            }
            var by = '';
            var aP = '';
            if (aW == 0) {
                by = ' class="active"';
                aP = ' style="display:block"'
            }
            aI += '<li><a href="#tab' + aW + '" ' + by + ' parent="tab_' + ou + '">' + icd + '' + M + '</a></li>';
            bg += '<div id="tab' + aW + '" class="tab tab_content" ' + aP + '>' + B + '</div>';
            aW++
        });
        aI = '<ul class="tabset tabs">' + aI + '</ul>';
        bg = '<div class="tab-box tabs-container">' + bg + '</div>';
        $(this).html(aI + bg);
        $(this).attr('id', 'tab_' + ou);
        ou++
    });
    (function ($) {
        $('.sc-tab .tabset li a').click(function () {
            var _h = $(this).attr('href');
            var _p = $(this).attr('parent');
            _p = '#' + _p;
            $(_p + ' .tab_content').hide();
            $(_p + ' .tabset li a').removeClass('active');
            $(this).addClass('active');
            $(_p + ' ' + _h).fadeIn(500);
            return false
        })
    })(jQuery);
    var my = 0;
    $('.sc-accordion').each(function () {
        var html = '';
        $(this).find('.sc-item').each(function () {
            var Mb = $(this).attr('title');
            var Bb = $(this).html();
            if (Mb == null || Mb == '') {
                Mb = 'Tab Title'
            }
            if (Bb == null || Bb == '') {
                Bb = 'My accordion'
            }
            Mb = '<h3 class="toggle"><a href="#accord-' + my + '"><span class="anchor"><i class="fa fa-chevron-down"></i></span>' + Mb + '</a></h3>';
            Bb = '<div class="trigger">' + Bb + '</div>';
            html += Mb + Bb
        });
        $(this).html(html);
        $(this).attr('id', 'accord-' + my);
        my++
    });
    (function ($) {
        $('.sc-accordion .toggle a').click(function () {
            _a = $(this).attr('href');
            $(_a + ' > h3 span.anchor').html('<i class="fa fa-chevron-down"></i>');
            $(_a + ' > .trigger').slideUp();
            _cl = $(this).attr('class');
            if (_cl != '' && _cl != null) {
                if (_cl.indexOf('active') != -1) {
                    $(this).removeClass('active');
                    return false
                }
            }
            $(_a + ' .toggle a').removeClass('active');
            $(this).parent().next().slideDown();
            $(this).children().html('<i class="fa fa-chevron-up"></i>');
            $(this).addClass('active');
            return false
        })
    })(jQuery);
    $('.sc-table').each(function () {
        var th = '';
        var td = '';
        var tabl = '';
        var thc = '';
        var tdc = '';
        var tbcls = $(this).attr('color');
        if (tbcls == null || tbcls == '') {
            tbcls = 'theme1'
        }
        tabl = '<table id="' + tbcls + '"><tbody>';
        $(this).find('.sc-row').each(function () {
            th = '';
            td = '';
            $(this).find('.sc-col').each(function () {
                var Cy = $(this).html();
                if (Cy == null || Cy == '') {
                    Cy = ''
                }
                td += '<td>' + Cy + '</td>'
            });
            $(this).find('.sc-heading').each(function () {
                var H = $(this).html();
                if (H == null || H == '') {
                    H = ''
                }
                th += '<th>' + H + '</th>'
            });
            tabl += '<tr>';
            if (td) {
                tabl += td
            }
            if (th) {
                tabl += th
            }
            tabl += '</tr>'
        });
        tabl += '</tbody></table>';
        $(this).html(tabl)
    });
    $('.sc-num').each(function () {
        var bhb = $(this).attr('size');
        var bhnum = $(this).html();
        if (bhb == null || bhb == '') {
            bhb = ''
        }
        if (bhnum == null || bhnum == '') {
            bhnum = '?'
        }
        var html = '<span class="sc-num ' + bhb + '"> ' + bhnum + '</span>';
        $(this).replaceWith(html)
    });
    $('.sc-soundcloud').each(function () {
        var bhl = $(this).attr('auto');
        var bha = $(this).attr('src');
        var bhc = $(this).attr('color');
        var bhw = $(this).attr('width');
        var bhh = $(this).attr('height');
        var bhv = $(this).attr('visual');
        var bhco = $(this).attr('comments');
        var bhu = $(this).attr('user');
        var pll = $(this).attr('playlist');
        if (pll == null || pll == '') {
            pll = 'tracks'
        }
        if (pll == 1) {
            pll = 'users'
        }
        if (bhu == null || bhu == '') {
            bhu = 'true'
        }
        if (bhco == null || bhco == '') {
            bhco = 'false'
        }
        if (bhl == null || bhl == '') {
            bhl = 'false'
        }
        if (bhv == null || bhv == '') {
            bhv = 'false'
        }
        if (bha == null || bha == '') {
            bha = '43852056'
        }
        if (bhc == null || bhc == '') {
            bhc = 'ff5500'
        }
        if (bhw == null || bhw == '') {
            bhw = '100%'
        }
        if (bhh == null || bhh == '') {
            bhh = '130'
        }
        var html = '<iframe width="' + bhw + '" height="' + bhh + '" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/' + pll + '/' + bha + '&amp;color=' + bhc + '&amp;auto_play=' + bhl + '&amp;hide_related=false&amp;show_comments=' + bhco + '&amp;show_user=' + bhu + '&amp;show_reposts=false&amp;visual=' + bhv + '"></iframe>';
        $(this).replaceWith(html)
    });
    $('.sc-dailymotion').each(function () {
        var bhd = $(this).attr('highlight');
        var bbg = $(this).attr('background');
        var bhfor = $(this).attr('color');
        var bhv = $(this).attr('src');
        var bhw = $(this).attr('width');
        var bhh = $(this).attr('height');
        var bhi = $(this).attr('info');
        var blo = $(this).attr('logo');
        if (bhd == null || bhd == '') {
            bhd = '29b7ff'
        }
        if (bhv == null || bhv == '') {
            bhv = 'x1ezu5y'
        }
        if (bbg == null || bbg == '') {
            bbg = '000000'
        }
        if (bhfor == null || bhfor == '') {
            bhfor = 'ffffff'
        }
        if (bhw == null || bhw == '') {
            bhw = '100%'
        }
        if (bhh == null || bhh == '') {
            bhh = '270'
        }
        if (blo == null || blo == '') {
            blo = '1'
        }
        if (bhi == null || bhi == '') {
            bhi = '1'
        }
        var html = '<iframe frameborder="0" width="' + bhw + '" height="' + bhh + '" src="http://www.dailymotion.com/embed/video/' + bhv + '?logo=' + blo + '&info=' + bhi + '&highlight=' + bhd + '&foreground=' + bhfor + '&background=' + bbg + '" allowfullscreen></iframe>';
        $(this).replaceWith(html)
    });
    $('.sc-facebook').each(function () {
        var bhv = $(this).attr('src');
        var fhw = $(this).attr('width');
        var fhh = $(this).attr('height');
        var fhc = $(this).attr('hide-cover');
        var fhp = $(this).attr('posts');
        var ffp = $(this).attr('faces');
        if (bhv == null || bhv == '') {
            bhv = 'bloggertricks'
        }
        if (fhw == null || fhw == '') {
            fhw = '280'
        }
        if (fhh == null || fhh == '') {
            fhh = '250'
        }
        if (fhc == null || fhc == '') {
            fhc = 'false'
        }
        if (fhp == null || fhp == '') {
            fhp = 'false'
        }
        if (ffp == null || ffp == '') {
            ffp = 'true'
        }
        var html = '<div class="fb-page" data-href="https://www.facebook.com/' + bhv + '" data-width="' + fhw + '" data-height="' + fhh + '" data-hide-cover="' + fhc + '" data-show-facepile="' + ffp + '" data-show-posts="' + fhp + '"></div>';
        $(this).replaceWith(html)
    });
    $('.sc-alert, .sc-warning, .sc-update, .sc-success, .sc-info').addClass('sc-notification');
    $('.sc-notification').each(function () {
        var M = $(this).attr('headline');
        var B = $(this).html();
        if (M == null) {
            M = ''
        }
        if (B == null) {
            B = ''
        }
        if (M != '') {
            M = '<div class="headline">' + M + '</div>'
        }
        $(this).html('<div class="wrapper">' + M + B + '</div>')
    });
    $('.sc-youtube').each(function () {
        var yhv = $(this).attr('src');
        var yhw = $(this).attr('width');
        var yhh = $(this).attr('height');
        var yhi = $(this).attr('info');
        var ylco = $(this).attr('control');
        var yllo = $(this).attr('playlist');
        var ylr = $(this).attr('related');
        if (yhv == null || yhv == '') {
            yhv = 'Qy4yULSqBA0'
        }
        if (yhw == null || yhw == '') {
            yhw = '90%'
        }
        if (yhh == null || yhh == '') {
            yhh = '300'
        }
        if (ylco == null || ylco == '') {
            ylco = '1'
        }
        if (yhi == null || yhi == '') {
            yhi = '1'
        }
        if (ylr == null || ylr == '') {
            ylr = '0'
        }
        if (yllo == null || yllo == '') {
            yllo = ''
        }
        var html = '<iframe width="' + yhw + '" height="' + yhh + '" src="https://www.youtube.com/embed/' + yhv + '?list=' + yllo + '&amp;rel=' + ylr + '&amp;controls=' + ylco + '&amp;showinfo=' + yhi + '" frameborder="0" allowfullscreen></iframe>';
        $(this).replaceWith(html)
    });
    $('.sc-code').each(function () {
        var Roo = $(this).attr('hl');
        var Bo = $(this).html();
        if (Roo == null || Roo == '') {
            Roo = ''
        }
        if (Bo == null || Bo == '') {
            Bo = 'Add some code here'
        }
        var html = '<pre class="brush:css, brush:html, brush:js, brush:php, brush:sql, brush:python, highlight: [' + Roo + ']"> ' + Bo + ' </pre>';
        $(this).replaceWith(html)
    });
    $('.sc-button').each(function () {
        var Ro = $(this).attr('src');
        var ai = $(this).attr('target');
        var av = $(this).attr('size');
        var bcolor = $(this).attr('color');
        var brel = $(this).attr('rel');
        var B = $(this).html();
        if (Ro == null || Ro == '') {
            Ro = '#'
        }
        if (ai == null || ai == '') {
            ai = ''
        }
        if (av == null || av == '') {
            av = 'normal'
        }
        if (brel == null || brel == '') {
            brel = ''
        }
        if (bcolor == null || bcolor == '') {
            bcolor = 'white'
        }
        if (B == null || B == '') {
            B = 'Button'
        }
        var html = '<a target="' + ai + '" rel="' + brel + '" href="' + Ro + '" class="sc-button ' + bcolor + ' ' + av + '">' + B + '</a>';
        $(this).replaceWith(html)
    });
    $('.sc-image').each(function () {
        var bhm = $(this).attr('src');
        var bhmli = $(this).attr('url');
        var brel = $(this).attr('rel');
        var bhml = 'href="' + bhmli + '"';
        var bhmw = $(this).attr('width');
        var bhmh = $(this).attr('height');
        if (bhm == null || bhm == '') {
            bhm = 'http://1.bp.blogspot.com/-ifaH6GTxW7o/VK42Av2CG9I/AAAAAAAAOXM/ksH3zD319_M/s1600/logo-mbt.png'
        }
        if (bhmw == null || bhmw == '') {
            bhmw = ''
        }
        if (brel == null || brel == '') {
            brel = ''
        }
        if (bhmli == null || bhmli == '') {
            bhml = '';
            bhmli = ''
        }
        if (bhmh == null || bhmh == '') {
            bhmh = ''
        }
        var html = '<br/><a ' + bhml + ' rel="' + brel + '"><img width="' + bhmw + '" height="' + bhmh + '" src="' + bhm + '"/></a><br/>';
        $(this).replaceWith(html)
    });
    $('.sc-divider').each(function () {
        var bh = $(this).attr('color');
        var divt = $(this).html();
        if (bh == null || bh == '') {
            bh = 'fblack'
        }
        if (divt == null || divt == '') {
            divt = ''
        }
        var html = '<div class="sc-divider"><span>' + divt + '</span><hr class="' + bh + '"><a class="sc-top" class="' + bh + '" href="#">Top</a></hr></div><br/>';
        $(this).replaceWith(html)
    });
    $('.sc-tooltip').each(function () {
        var bhcn = $(this).attr('url');
        var bhca = $(this).attr('title');
        var bhcs = $(this).html();
        if (bhcn == null || bhcn == '') {
            bhcn = '#'
        }
        if (bhca == null || bhca == '') {
            bhca = 'Insert Link Title'
        }
        if (bhcs == null || bhcs == '') {
            bhcs = 'Insert Tooltip Text'
        }
        var html = '<a href="' + bhcn + '" class="tooltip">' + bhca + '<span><b></b>' + bhcs + '</span></a>';
        $(this).replaceWith(html)
    })
});
$(document).ready(function () {
    $(".sc-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.sc-top').fadeIn()
            } else {
                $('.sc-top').fadeOut()
            }
        });
        $('.sc-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false
        })
    })
});
$(document).ready(function () {
    if ($('#mycontent').attr('href') != 'https://github.com/') {
        window.location.href = 'https://github.com/'
    }
});
