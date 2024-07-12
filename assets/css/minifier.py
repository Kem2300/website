class Minify:
	def __init__(self):
		self.css_file = "styles.css"
		#self.javascript_file = "assets/js/scripts.js"
		self.html_file = "index.html"
		self.minify_css()
		#self.minify_js()

	def minify_css(self):
		opened_css_file = open(self.css_file, "r")
		css_line_list = opened_css_file.readlines()
		opened_css_file.close
		minified_css_file = open("styles.css", "a")
		css_minified = " ".join([line.strip() for line in css_line_list])
		minified_css_file.write(css_minified)
		minified_css_file.close()
		print("")
		print("[+] CSS successfully minified!")
		print("")

	def minify_js(self):
		opened_js_file = open(self.javascript_file, "r")
		js_line_list = opened_js_file.readlines()
		opened_js_file.close
		minified_js_file = open("scripts.js", "a")
		js_minified = " ".join([line.strip() for line in js_line_list])
		minified_js_file.write(js_minified)
		minified_js_file.close()
		print("")
		print("[+] JS successfully minified!")
		print("")

Minify()

