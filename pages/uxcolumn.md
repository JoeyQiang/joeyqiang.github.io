---
layout: page
title: UX Column
---

<ul>
	{% for post in site.categories.ux %}
	<li>
		<a href="{{ site.baseurl }}{{post.url}}">{{post.title}}</a>
	</li>
	{% endfor %}			
</ul>			