<!-- Stored in app/views/layouts/master.blade.php -->

<html>
<head>
    <title></title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link media="all" type="text/css" rel="stylesheet" href="http://kep.thesponge.eu/css/style.css">

    <link media="all" type="text/css" rel="stylesheet" href="http://kep.thesponge.eu/css/app.css">

    <script src="http://kep.thesponge.eu/js/vendor/modernizr.js"></script>


</head>

    <body>
                    <div class="contain-to-grid sticky">
            <nav class="top-bar" data-topbar>
                <ul class="title-area">
                    <li class="name">
                        <h1><a href="#">Knowledge Exchange Platform</a></h1>
                    </li>
                    <section class="top-bar-section">
                        <!-- Right Nav Section -->
                        <ul class="right">
                            <li class="has-dropdown">
                                <a href="#">&lt;username&gt;</a>
                                <ul class="dropdown">
                                    <li><a href="#">Profile information</a></li>
                                    <li><a href="#">Invite a friend</a></li>
                                    <li><a href="#">Log out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
            </nav>
        </div>
        

        <div class="row" style="margin-top: 50px;">
            <div class="small-12 columns">
                <dl class="sub-nav">
                    <dt>Apps (WIP):</dt>
                    <dd>
                        <a href="/app/fixer/welcome">Fixer Finder</a>
                    </dd>
                    <dd>
                        <a href="/app/resources">Resources & storage</a>
                    </dd>
                    <dd>
                        <a href="/app/tools">Collaboration tools</a>
                    </dd>
                    <dd>
                        <a href="/app/blogs">Blogs</a>
                    </dd>
                </dl>
            </div>
        </div>

        <div class="row">
                <p>Not implemented yet.</p>
        </div>

        <script src="http://kep.thesponge.eu/js/vendor/jquery.js"></script>

        <script src="http://kep.thesponge.eu/js/foundation.min.js"></script>

        <script>
            $(document).foundation();
        </script>
    </body>
</html>