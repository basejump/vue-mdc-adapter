## Toolbar

```html
<mdc-toolbar>
  <mdc-toolbar-row>
    <mdc-toolbar-section align-start >
      <mdc-toolbar-icon-menu event="toggle-drawer"></mdc-toolbar-icon-menu>
      <mdc-toolbar-title>Title</mdc-toolbar-title>
    </mdc-toolbar-section>
    <mdc-toolbar-section align-end>
      <mdc-toolbar-icon event="show-help">help</mdc-toolbar-icon>
    </mdc-toolbar-section>
  </mdc-toolbar-row>
</mdc-toolbar>
```


### Toolbars

`mdc-toolbar` acts as a container for multiple rows containing items such as
application title, navigation menu, and tabs, among other things.
Toolbars scroll with content by default, but support fixed behavior as well.


| props | Type | Default | Description |
|-------|------|---------|-------------|
|`fixed`|Boolean|| wether the toolbar is fixed |
|`waterfall`| String|false| wether the toolbar is waterfal |
|`fixed-lastrow`| Boolean|false| wether the toolbar is fixed for lastrow |
|`flexible`|Boolean|false| wether the toolbar is flexible |
|`flexible-default`|Boolean| true | if flexible, apply default material design behaviour |

When using the fixed pattern, a persistent elevation is added to toolbar.
When using the waterfall pattern, a toolbar will have no elevation when the page
is scrolled to the top, and gain elevation when a user begins to scroll down the
page. Toolbars also support anchored only last row at the top behavior.
For toolbars with this modifier, only the last row will be anchored at the top,
while the rest of toolbar scrolls off.

Flexible behavior can be added to mdc-toolbar, where the height of the toolbar
changes as the user scrolls. Flexible is defined as a modifier class of toolbar
but not a standalone component. Toolbars using this modifier will have
additional height added to their first rows.

### Section

MDC Toolbars can accommodate multiple sections using the wrapper `mdc-toolbar-section`

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`align-start`|Boolean|false| wether the section aligns to start |
|`align-end`|Boolean|false| wether the section aligns to end |
|`shrink-to-fit`|Boolean|false| wether the section shrinks to fit |

Toolbar sections are aligned to the toolbar’s center. You can change this 
behavior by applying `align-start` or `align-end` to align the sections to the 
start or the end of the toolbar (respectively).


### Rows

MDC Toolbars can accommodate multiple rows using the wrapper `mdc-toolbar-row`

```html
<mdc-toolbar>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
</mdc-toolbar>
```

### Title

You can use the `mdc-toolbar-title` wrapper to style toolbar text representing 
a page’s title, or an application name.


### Icons

- `mdc-toolbar-icon-menu` wraps the left most icon in mdc-toolbar usually to 
the left of mdc-toolbar-title. It renders as material menu icon by default

- `mdc-toolbar-icon` wraps any icons placed on the right side of an
mdc-toolbar.

| props | Type | Default | Description |
|-------|------|---------|-------------|
|`event`|String| null | event to emit on the vm.$mdc hub |

> if the `event` property is not specified, use @click to cactch click events


### Fixed toolbars

```html
<mdc-toolbar fixed>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
</mdc-toolbar>
```

### Waterfall toolbar

Waterfall toolbar is initially static and has no elevation, and then when the
user starts scrolling becomes fixed and gains elevation.

```html
<mdc-toolbar waterfall>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
</mdc-toolbar>
```

### Fixed last row toolbars

The toolbars will anchor only the last row to the top.

```html
<mdc-toolbar fixed-lastrow>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
  <mdc-toolbar-row>
    <!-- fixed row -->
  </mdc-toolbar-row>
</mdc-toolbar>
```

### Flexible toolbars

With flexible behavior the toolbar height changes as the user scrolls. 

```html
<mdc-toolbar flexible>
  <mdc-toolbar-row>
    <!-- ... -->
  </mdc-toolbar-row>
  <mdc-toolbar-row>
    <!-- fixed row -->
  </mdc-toolbar-row>
</mdc-toolbar>
```

For the most common use case of flexible headers, the default behavior is as
follow :

- Flexible has a fixed initial height 4 times the default size of mdc-toolbar-row.
- When it has `flexible-default` behavior, it further defines the background and title movement behavior.

refer to [MDC Documentation](https://material.io/components/web/catalog/toolbar/#flexible-toolbar-requires-javascript) to customize.


### Reference
- https://material.io/components/web/catalog/toolbar
