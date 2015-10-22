---
layout: page
title: design
---

<ul class="list">
	{% for post in site.posts %}
	{% if post.category == "design" %}
	<li class="list-item clearfix">
		<div class="list-text left">
			<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
		</div>
		<div class="list-time right">
			<time class="time">{{ post.date | date_to_string }}</time>
		</div>
	</li>
	{% endif %}
	{% endfor %}
</ul>		