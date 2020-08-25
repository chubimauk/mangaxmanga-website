---
id: roadmap
title: Feature Roadmap
sidebar_label: Roadmap
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### Planned Features

:::tip Partially Functional

These are working but not fully fleshed out

:::

+ <Highlight color="#4A23C9">Cross Site Series Mapping</Highlight>


:::important In Development

Major features being developed

:::

+ Dynamic Recommendations
+ Smart Recommendations

:::caution Not Yet Started

Researched but not in development yet

:::

+ Backup/Restore
+ Sync between iOS and MacOS
+ Better support for landscape device orientation
+ Ability to clear cache

    + Currently Chapter listing pages are cached so that on repeat viewing they load quicker, this could potentially end up storing a lot eventually without clearing out the cache. (You can still pull down to refresh the chapter listing page to overwrite the cached results anytime you want)



