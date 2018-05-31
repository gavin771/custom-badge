## Create your own custom badge

1. Hit the url with required query parameters... 
	* title - Defaults to 'Default Title' 
	* color - Defaults to 'green' [brightgreen,green,yellow,yellowgreen,orange,red,blue,grey,gray,lightgrey,lightgray]
	* value - Defaults to 'Default Title'
	* template - Defaults to 'flat-square' [flat,plastic,flat-square,social]

### Examples
Default: https://hidden-forest-44927.herokuapp.com/generate ![Default](https://hidden-forest-44927.herokuapp.com/generate)
Flat/red: https://hidden-forest-44927.herokuapp.com/generate?template=flat&color=red ![Flat/Red](https://hidden-forest-44927.herokuapp.com/generate?template=flat&color=red)
Plastic/blue: https://hidden-forest-44927.herokuapp.com/generate?template=plastic&color=blue ![Plastic/Blue](https://hidden-forest-44927.herokuapp.com/generate?template=plastic&color=blue)
Social/grey: https://hidden-forest-44927.herokuapp.com/generate?template=social&color=grey ![Social/Grey](https://hidden-forest-44927.herokuapp.com/generate?template=social&color=grey)


N.B. The returned svg for this is served from Heroku, so if the dyno is sleeping the initial load may be slow...
