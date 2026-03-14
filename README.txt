This is going to be where I add all my documentation and notes
regarding the website. It's going to be mostly about project
structure and formatting standards that I'm using.

Project Structure:
    The work files are separated into two folders: assets and
    components.
    
    Assets is for images, videos, and any pdf files I may
    choose to include like my resume. Files will be organized
    by the page that it gets added to i.e. images from a
    photoshoot will go into Photography.

    Components is where all the React-based pages and css will
    be.They're organized by their purpose whether it's a fixed
    component on the screen, a webpage, or a reusable function.
    Examples are the navbar, the Portfolio page, and the FadeUp
    function, respectively.

Formatting:
    All pages are broken up by their expected resolutions.
    Admittedly, I'm not sure if styling for every resolution is
    the most efficient route to take, but it definitely is easy
    to read and quick to change. Every media query is set up to
    be the first width resolution available above its previous
    format.
    
    For example, @media (min-width: 1025px) is the query
    for 1080p screens because the highest expected width for the
    next smallest device - a tablet - would be 1024px. @media
    (min-width: 1921px) is for 1440p because a 1080p monitor's
    max width should be 1920. This is to make sure that the
    queries aren't built on the display's actual resolution but
    will capture the browser's viewport instead. A 1440p monitor
    doesn't display the browser at 1440p unless it's in
    fullscreen mode.

Styling:
    Everything is made to scale properly across each resolution.
    1k to 2k to 4k should all be relatively the same size simply
    by increasing widths and font sizes linearly. Everything is
    designed mobile first before splitting things up to fit on
    desktop. It's important to minimize repetitive styles by
    having defaults outside of the media queries at the top such
    as borders, text alignments, and font colours.
    
    This format should be followed throughout the website to
    guarantee that everything stays the same size across devices:

    Mobile:
        Body Font Size: 20px
    Tablet:
        Body Font Size: 32px
    1080p:
        Body Font Size: 20px
    1440p:
        Body Font Size: 27px
    2160p:
        Body Font Size: 40px
    
    Images:
        After styling for mobile, all images should scale properly
        up from the 1080p format. 1440p image widths should be 
        1080p's value plus a third. 2160p should be double of
        1080p's image widths.

        1080p screen's image width is 100 px -> 1440p's is 133px ->
        2160p's is 200px