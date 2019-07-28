## Getting started

```
yarn && yarn start
```

Then navigate to 

```
localhost:8080
```

## Files to care about?

Entrypoint
```
/src/gui/app.ts
```

To see how GlobalContext is used to pull class instances from the state
```
/src/gui/components/toolbar/toolbar.tsx
```

To see what a service instance looks like
```
/src/platform/theme/theme.ts
```

To see how non class instances are selected from the state
```
/src/gui/pages/home/hooks/use-posts.ts
```

To see how state is composed
```
/gui/state/state.ts
```
