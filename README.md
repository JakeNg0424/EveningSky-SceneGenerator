# Evening Sky
This project offers a generative, living impression of this inspiring image:
![]()

Relation to inspiring image:

- Color: The sky is special since its during the early evening, so I made a gradient for the background from blue to black (day to night). The brownish ground is the sand in the picture while all the stars are bright white, piercing through the sky.
- Primitives: The smaller stars are rendered with `ellipse` primitives, and the ground is a basic `rectangle` primitive.
- Polygons: The giant bright star is a single polygon using `vertex` calls and a bit of sine/cosine math to create its famous shape.
- Composition: Different random seed values lead to differently positioned stars.
- Life: The position of the stars is animated over time as if to simulate our planet constantly rotating and the slightly responds to the horizontal motion of the mouse cursor while the larger star is always spinning to add pizzazz.