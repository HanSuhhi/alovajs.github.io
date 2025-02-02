---
title: Pagination request strategy
sidebar_position: 20
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info

Before using extension hooks, make sure you are familiar with basic usage of alova.

:::

A hook designed for paging scenarios, which can help you automatically manage paging data, preload data, reduce unnecessary data refresh, improve fluency by 300%, and reduce coding difficulty by 50%\*\*. You can use it in the two paging scenarios of pull-down loading and page number flipping. This hook provides a wealth of features to help your application create better performance and more convenient paging functions.

## Example

[page list](/example/paginated-list)

[Pull down to load more](/example/load-more)

## Features

- ✨ Rich and comprehensive paging status;
- ✨ Rich and comprehensive pagination events;
- ✨ Change page, pageSize to automatically get specified paging data;
- ✨Data caching, no need to repeatedly request list data of the same parameters;
- ✨ Front and back pages are preloaded, no waiting for page turning;
- ✨Search condition monitoring automatically reacquires pages;
- ✨ Support adding, editing and deleting list data;
- ✨ Support refreshing the data of the specified page without reset;
- ✨ Request-level search anti-shake, no need to maintain by yourself;

## Install

<Tabs groupId="framework">
<TabItem value="1" label="vue">

```bash
# npm
npm install @alova/scene-vue --save
#yarn
yarn add @alova/scene-vue

```

</TabItem>
<TabItem value="2" label="react">

```bash
# npm
npm install @alova/scene-react --save
#yarn
yarn add @alova/scene-react

```

</TabItem>

<TabItem value="3" label="svelte">

```bash
# npm
npm install @alova/scene-svelte --save
#yarn
yarn add @alova/scene-svelte

```

</TabItem>
</Tabs>

## Usage

### Display list data

<Tabs groupId="framework">
<TabItem value="1" label="vue">

```html
<template>
  <div
    v-for="item in data"
    :key="item.id">
    <span>{{ item.name }}</span>
  </div>
  <button @click="handlePrevPage">Previous page</button>
  <button @click="handleNextPage">next page</button>
  <button @click="handleSetPageSize">Set the number of pages</button>
  <span>There are {{ pageCount }} pages</span>
  <span>A total of {{ total }} data</span>
</template>

<script setup>
  import { queryStudents } from './api.js';
  import { usePagination } from '@alova/scene-vue';

  const {
    // loading state
    loading,

    // list data
    data,

    // is it the last page
    // This parameter can be used to determine whether it needs to be loaded during pull-down loading
    isLastPage,

    // The current page number, changing this page number will automatically trigger the request
    page,

    // Number of data items per page
    pageSize,

    // number of paging pages
    pageCount,

    // total amount of data
    total
  } = usePagination(
    // Method instance acquisition function, it will receive page and pageSize, and return a Method instance
    (page, pageSize) => queryStudents(page, pageSize),
    {
      // Initial data before the request (data format returned by the interface)
      initialData: {
        total: 0,
        data: []
      },
      initialPage: 1, // initial page number, default is 1
      initialPageSize: 10 // The initial number of data items per page, the default is 10
    }
  );

  // Turn to the previous page, the request will be sent automatically after the page value changes
  const handlePrevPage = () => {
    page.value--;
  };

  // Turn to the next page, the request will be sent automatically after the page value changes
  const handleNextPage = () => {
    page.value++;
  };

  // Change the number of pages, the request will be sent automatically after the pageSize value is changed
  const handleSetPageSize = () => {
    pageSize.value = 20;
  };
</script>
```

</TabItem>
<TabItem value="2" label="react">

```jsx
import { queryStudents } from './api.js';
import { usePagination } from '@alova/scene-react';

const App = () => {
  const {
    // loading state
    loading,

    // list data
    data,

    // is it the last page
    // This parameter can be used to determine whether it needs to be loaded during pull-down loading
    isLastPage,

    // The current page number, changing this page number will automatically trigger the request
    page: [page, setPage],

    // Number of data items per page
    pageSize: [page, setPageSize],

    // number of paging pages
    pageCount,

    // total amount of data
    total
  } = usePagination(
    // Method instance acquisition function, it will receive page and pageSize, and return a Method instance
    (page, pageSize) => queryStudents(page, pageSize),
    {
      // Initial data before the request (data format returned by the interface)
      initialData: {
        total: 0,
        data: []
      },
      initialPage: 1, // initial page number, default is 1
      initialPageSize: 10 // The initial number of data items per page, the default is 10
    }
  );

  // Turn to the previous page, the request will be sent automatically after the page value changes
  const handlePrevPage = () => {
    setPage(value => value - 1);
  };

  // Turn to the next page, the request will be sent automatically after the page value changes
  const handleNextPage = () => {
    setPage(value => value + 1);
  };

  // Change the number of pages, the request will be sent automatically after the pageSize value is changed
  const handleSetPageSize = () => {
    setPageSize(20);
  };

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      ))}
      <button onClick={handlePrevPage}>Previous page</button>
      <button onClick={handleNextPage}>Next Page</button>
      <button onClick={handleSetPageSize}>Set the number per page</button>
      <span>There are {pageCount} pages</span>
      <span>A total of {total} pieces of data</span>
    </div>
  );
};
```

</TabItem>
<TabItem value="3" label="svelte">

```html
<script>
  import { queryStudents } from './api.js';
  import { usePagination } from '@alova/scene-svelte';

  const {
    // loading state
    loading,

    // list data
    data,

    // is it the last page
    // This parameter can be used to determine whether it needs to be loaded during pull-down loading
    isLastPage,

    // The current page number, changing this page number will automatically trigger the request
    page,

    // Number of data items per page
    pageSize,

    // number of paging pages
    pageCount,

    // total amount of data
    total
  } = usePagination(
    // Method instance acquisition function, it will receive page and pageSize, and return a Method instance
    (page, pageSize) => queryStudents(page, pageSize),
    {
      // Initial data before the request (data format returned by the interface)
      initialData: {
        total: 0,
        data: []
      },
      initialPage: 1, // initial page number, default is 1
      initialPageSize: 10 // The initial number of data items per page, the default is 10
    }
  );

  // Turn to the previous page, the request will be sent automatically after the page value changes
  const handlePrevPage = () => {
    $page--;
  };

  // Turn to the next page, the request will be sent automatically after the page value changes
  const handleNextPage = () => {
    $page++;
  };

  // Change the number of pages, the request will be sent automatically after the pageSize value is changed
  const handleSetPageSize = () => {
    $pageSize = 20;
  };
</script>

{#each $data as item}
<div>
  <span>{item.name}</span>
</div>
{/each}
<button on:click="{handlePrevPage}">Previous page</button>
<button on:click="{handleNextPage}">Next Page</button>
<button on:click="{handleSetPageSize}">Set the number per page</button>
<span>There are {pageCount} pages</span>
<span>A total of {total} pieces of data</span>
```

</TabItem>
</Tabs>

### Specify pagination data

The data structure returned by each paging data interface is different, so we need to tell `usePagination` the list data and the total number of items separately, so as to help us manage the paging data.

Suppose the data format returned by your paging interface is as follows:

```typescript
interface PaginationData {
  totalNumber: number;
  list: any[];
}
```

At this point, you need to return the list data and the total number of items in the form of a function.

```javascript
usePagination((page, pageSize) => queryStudents(page, pageSize), {
  //...
  // highlight-start
  total: response => response.totalNumber,
  data: response => response.list
  // highlight-end
});
```

If you don't specify the total and data callback functions, they will get data in the following ways by default.

```javascript
const total = response => response.total;
const data = response => response.data;
```

:::caution Caution

The data callback function must return a list of data, indicating the data set used in paging, and total is mainly used to calculate the current page number. If no number is returned in the total callback function, it will pass whether the number of requested lists is less than the pageSize value To determine whether the current page is the last page, which is generally used for pull-down loading.

:::

### Enable append mode

By default, the original list data will be replaced when the page is turned, and the append mode will append the data of the next page to the bottom of the current list when the page is turned. A common usage scenario is to pull down to load more.

```javascript
usePagination((page, pageSize) => queryStudents(page, pageSize), {
  //...
  // highlight-start
  append: true
  // highlight-end
});
```

### Preload adjacent page data

In order to provide a better experience for pagination, when the previous and next pages of the current page meet the conditions, it will be automatically preloaded, so that when the user turns the page, the data can be displayed directly without waiting. This is the default behavior. If you don't want to preload the data of adjacent pages, you can turn it off in the following way.

```javascript
usePagination((page, pageSize) => queryStudents(page, pageSize), {
  //...
  // highlight-start
  preloadPreviousPage: false, // turn off preloading previous page data
  preloadNextPage: false // turn off preloading next page data
  // highlight-end
});
```

In addition to `onSuccess, onError, onComplete` request events, when preloading is triggered, you can also know the preloading status through `fetching`, and you can also listen to preloading request events through `onFetchSuccess, onFetchError, onFetchComplete`.

```javascript
const {
  // preload state
  fetching,

  // preload success event binding function
  onFetchSuccess,

  // preload error event binding function
  onFetchError,

  // Preloading complete event binding function
  onFetchComplete
} = usePagination((page, pageSize) => queryStudents(page, pageSize), {
  //...
});
```

### Listening filter conditions

In many cases, the list needs to be filtered by conditions. At this time, the re-request can be triggered through the status monitoring of `usePagination`, which is the same as `useWatcher` provided by alova.

For example, filter by student name, student grade.

<Tabs groupId="framework">
<TabItem value="1" label="vue">

```html
<template>
  <!-- highlight-start -->
  <input v-model="studentName" />
  <select v-model="clsName">
    <option value="1">Class 1</option>
    <option value="2">Class 2</option>
    <option value="3">Class 3</option>
  </select>
  <!-- highlight-end -->
  <!-- ... -->
</template>

<script setup>
  import { ref } from 'vue';
  import { queryStudents } from './api.js';
  import { usePagination } from '@alova/scene-vue';

  // search condition status
  const studentName = ref('');
  const clsName = ref('');
  const {
    //...
  } = usePagination((page, pageSize) => queryStudents(page, pageSize, studentName.value, clsName.value), {
    //...
    // highlight-start
    watchingStates: [studentName, clsName]
    // highlight-end
  });
</script>
```

</TabItem>
<TabItem value="2" label="react">

```jsx
import { queryStudents } from './api.js';
import { usePagination } from '@alova/scene-react';

const App = () => {
   // search condition status
   const [studentName, setStudentName] = useState('');
   const [clsName, setClsName] = useState('');
   const {
     //...
   } = usePagination(
     (page, pageSize) => queryStudents(page, pageSize, studentName, clsName),
     {
       //...
       // highlight-start
       watchingStates: [studentName, clsName]
       // highlight-end
     }
   );

   return (
     // highlight-start
     <input value={studentName} onChange={({ target }) => setStudentName(target. value)} />
     <select value={clsName} onChange={({ target }) => setClsName(target. value)}>
       <option value="1">Class 1</option>
       <option value="2">Class 2</option>
       <option value="3">Class 3</option>
     </select>
     // highlight-end
     //...
   );
};
```

</TabItem>
<TabItem value="3" label="svelte">

```html
<script>
  import { queryStudents } from './api.js';
  import { usePagination } from '@alova/scene-svelte';
  import { writable } from 'svelte/store';

  // search condition status
  const studentName = writable('');
  const clsName = writable('');
  const {
    //...
  } = usePagination((page, pageSize) => queryStudents(page, pageSize, $studentName, $clsName), {
    //...
    // highlight-start
    watchingStates: [studentName, clsName]
    // highlight-end
  });
</script>

<!-- highlight-start -->
<input bind:value="{studentName}" />
<select bind:value="{clsName}">
  <option value="1">Class 1</option>
  <option value="2">Class 2</option>
  <option value="3">Class 3</option>
</select>
<!-- highlight-end -->
<!-- ... -->
```

</TabItem>
</Tabs>

Same as `useWatcher`, you can also implement request debounce by specifying `debounce`, for details, please refer to [useWatcher's debounce parameter setting](/learning/use-watcher).

```javascript
usePagination((page, pageSize) => queryStudents(page, pageSize, studentName, clsName), {
  //...
  // highlight-start
  debounce: 300 // Anti-shake parameters, in milliseconds, can also be set as an array to set the anti-shake time separately for watchingStates
  // highlight-end
});
```

It should be noted that `debounce` is achieved by request debounce in [**useWatcher**](/learning/use-watcher). **At the end of the monitoring state, there are two hidden monitoring states of page and pageSize, which can also be set by debounce. **

For example, when `watchingStates` is set to `[studentName, clsName]`, `[studentName, clsName, page, pageSize]` will be monitored internally, so if you need to set anti-shake for page and pageSize, you can specify ` [0, 0, 500, 500]`.

### Close initialization request

By default, `usePagination` will initiate a request during initialization, but you can also use `immediate` to turn it off, and then pass the `send` function, or change `page` or `pageSize`, and `watchingStates`, etc. state to initiate the request.

```javascript
usePagination((page, pageSize) => queryStudents(page, pageSize, studentName, clsName), {
  //...
  // highlight-start
  immediate: false
  // highlight-end
});
```

## list manipulation functions

usePagination provides a fully functional list operation function, which can achieve the same effect as the re-request list without re-requesting the list, which greatly improves the interactive experience of the page. The specific function description continues to look down!

### Insert list item

You can use it to insert list items to any position in the list, and it will remove the last item after insertion to ensure the same effect as re-requesting the current page data.

```typescript
/**
  * Insert a piece of data, if the index is not passed in, it will be inserted at the front by default
  * @param item insert item
  * @param index insertion position (index)
  */
insert: (item: LD[number], index?: number) => void;
```

The following is an example of returning to the first page and then inserting list items in **non-append mode** (page number flipping scenario):

```javascript
page.value = 1;
nextTick(() => {
  insert(newItem, 0);
});
```

The following is an example of scrolling to the top after inserting a list item in **append mode** (drop-down loading scene):

```javascript
insert(newItem, 0);
nextTick(() => {
  window.scrollTo(0, {});
});
```

:::caution Caution

In order to make the data correct, the insert function call will clear all caches.

:::

### Remove list item

In the case that the next page has a cache, it will use the cache of the next page to add to the end of the list item after removing an item, so as to ensure the same effect as re-requesting the data of the current page. In **append mode** and Behave the same in **non-append mode**.

```typescript
/**
  * Remove a piece of data
  * @param index index to remove
  */
remove: (index: number) => void;
```

But in the following two cases, it will re-initiate the request to refresh the data of the corresponding page:

1. The next page is not cached
2. The data that exceeds the next page cache list item is continuously called synchronously, and the cache data is not enough to supplement the current page list.

:::caution Caution
In order to make the data correct, the remove function call will clear all caches.
:::

### Update data items

Use this function when you want to update list items.

```typescript
/**
  * Replace a piece of data
  * @param item replacement item
  * @param index replacement position (index)
  */
replace: (item: LD[number], index: number) => void;
```

### Refresh the data of the specified page

When you do not want to update the list items locally after the data operation, but re-request the data on the server side, you can use refresh to refresh the data on any page, without resetting the list data and letting the user start browsing from the first page again.

```typescript
/**
  * Refresh the specified page number data, this function will ignore the cache to force the send request
  * @param refreshPage refresh page number
  */
refresh: (refreshPage: number) => void;
```

### Manually update list data

Use the `update` function to update responsive data, which is similar to [useRequest's update](/learning/use-request), the only difference is that when calling `update` to update `data`, the list data is updated, while non-response data. This is useful when manually clearing list data without reissuing the request.

```typescript
// case list data
update({
  data: []
});
```

### Reset list

It will clear all caches and reload the first page.

```typescript
/**
  * Reload the list from the first page and clear the cache
  */
reload: () => void;
```

##Typescript

<Tabs groupId="framework">
<TabItem value="1" label="vue">

```typescript
interface UsePaginationReturnType<LD extends any[], R> {
  loading: Ref<boolean>;
  error: Ref<Error | undefined>;
  downloading: Ref<Progress>;
  uploading: Ref<Progress>;
  page: Ref<number>;
  pageSize: Ref<number>;
  data: Ref<LD>;
  pageCount: ComputedRef<number | undefined>;
  total: ComputedRef<number | undefined>;
  isLastPage: ComputedRef<boolean>;

  abort: () => void;
  send: (...args: any[]) => Promise<R>;
  onSuccess: (handler: SuccessHandler<R>) => void;
  onError: (handler: ErrorHandler) => void;
  onComplete: (handler: CompleteHandler) => void;

  fetching: Ref<boolean>;
  onFetchSuccess: (handler: SuccessHandler<R>) => void;
  onFetchError: (handler: ErrorHandler) => void;
  onFetchComplete: (handler: CompleteHandler) => void;
  update: (newFrontStates: Partial<FrontRequestState<boolean, LD, Error | undefined, Progress, Progress>>) => void;

  /**
   * Refresh the specified page number data, this function will ignore the cache to force the send request
   * @param refreshPage refresh page number
   */
  refresh: (refreshPage: number) => void;

  /**
   * Insert a piece of data
   * onBefore, insert operation, and onAfter all need to be executed sequentially and asynchronously, because they need to wait for the view to be updated before executing
   * @param item insert item
   * @param config insert configuration
   */
  insert: (item: LD[number], config?: InsertConfig) => void;

  /**
   * Remove a piece of data
   * @param index index to remove
   */
  remove: (index: any) => void;

  /**
   * Reload the list from the first page and clear the cache
   */
  reload: () => void;
}

/**
 * Vue paging hook based on alova.js
 * Automatic management of pagination-related states, preloading of previous and subsequent pages, automatic maintenance of data addition/editing/replacement/removal
 *
 * @param handler method creation function
 * @param config pagination hook configuration
 * @returns {UsePaginationReturnType}
 */
export declare function usePagination<
  S extends Ref,
  E extends Ref,
  R,
  T,
  RC,
  RE,
  RH,
  LD extends any[],
  WS extends WatchSource[]
>(
  handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,
  config: PaginationConfig<R, LD, WS>
): UsePaginationReturnType<LD, R>;
```

</TabItem>
<TabItem value="2" label="react">

```typescript
type ReactState<S> = [S, Dispatch<SetStateAction<S>>];
interface UsePaginationReturnType<LD extends any[], R> {
  loading: boolean;
  error: Error | undefined;
  downloading: Progress;
  uploading: Progress;
  page: ReactState<number>;
  pageSize: ReactState<number>;
  data: LD;
  pageCount: number | undefined;
  total: number | undefined;
  isLastPage: boolean;

  abort: () => void;
  send: (...args: any[]) => Promise<R>;
  onSuccess: (handler: SuccessHandler<R>) => void;
  onError: (handler: ErrorHandler) => void;
  onComplete: (handler: CompleteHandler) => void;

  fetching: boolean;
  onFetchSuccess: (handler: SuccessHandler<R>) => void;
  onFetchError: (handler: ErrorHandler) => void;
  onFetchComplete: (handler: CompleteHandler) => void;
  update: (newFrontStates: Partial<FrontRequestState<boolean, LD, Error | undefined, Progress, Progress>>) => void;

  /**
   * Refresh the specified page number data, this function will ignore the cache to force the send request
   * @param refreshPage refresh page number
   */
  refresh: (refreshPage: number) => void;

  /**
   * Insert a piece of data
   * onBefore, insert operation, and onAfter all need to be executed sequentially and asynchronously, because they need to wait for the view to be updated before executing
   * @param item insert item
   * @param config insert configuration
   */
  insert: (item: LD[number], config?: InsertConfig) => void;

  /**
   * Remove a piece of data
   * @param index index to remove
   */
  remove: (index: any) => void;

  /**
   * Reload the list from the first page and clear the cache
   */
  reload: () => void;
}

/**
 * React paging hook based on alova.js
 * Automatic management of pagination-related states, preloading of previous and subsequent pages, automatic maintenance of data addition/editing/removal
 *
 * @param handler method creation function
 * @param config pagination hook configuration
 * @returns {UsePaginationReturnType}
 */
export declare function usePagination<S, E, R, T, RC, RE, RH, LD extends any[], WS extends DependencyList>(
  handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,
  config: PaginationConfig<R, LD, WS>
): UsePaginationReturnType<LD, R>;
```

</TabItem>
<TabItem value="3" label="svelte">

```typescript
interface UsePaginationReturnType<LD extends any[], R> {
  loading: Writable<boolean>;
  error: Writable<Error | undefined>;
  downloading: Writable<Progress>;
  uploading: Writable<Progress>;
  page: Writable<number>;
  pageSize: Writable<number>;
  data: Writable<LD>;
  pageCount: Readable<number | undefined>;
  total: Readable<number | undefined>;
  isLastPage: Readonly<Readable<boolean>>;

  abort: () => void;
  send: (...args: any[]) => Promise<R>;
  onSuccess: (handler: SuccessHandler<R>) => void;
  onError: (handler: ErrorHandler) => void;
  onComplete: (handler: CompleteHandler) => void;

  fetching: Writable<boolean>;
  onFetchSuccess: (handler: SuccessHandler<R>) => void;
  onFetchError: (handler: ErrorHandler) => void;
  onFetchComplete: (handler: CompleteHandler) => void;
  update: (newFrontStates: Partial<FrontRequestState<boolean, LD, Error | undefined, Progress, Progress>>) => void;

  /**
   * Refresh the specified page number data, this function will ignore the cache to force the send request
   * @param refreshPage refresh page number
   */
  refresh: (refreshPage: number) => void;

  /**
   * Insert a piece of data
   * onBefore, insert operation, and onAfter all need to be executed sequentially and asynchronously, because they need to wait for the view to be updated before executing
   * @param item insert item
   * @param config insert configuration
   */
  insert: (item: LD[number], config?: InsertConfig) => void;

  /**
   * Remove a piece of data
   * @param index index to remove
   */
  remove: (index: any) => void;

  /**
   * Reload the list from the first page and clear the cache
   */
  reload: () => void;
}

/**
 * svelte paging hook based on alova.js
 * Automatic management of pagination-related states, preloading of previous and subsequent pages, automatic maintenance of data addition/editing/removal
 *
 * @param handler method creation function
 * @param config pagination hook configuration
 * @returns {UsePaginationReturnType}
 */
export declare function usePagination<
  S extends Writable<any>,
  E extends Writable<any>,
  R,
  T,
  RC,
  RE,
  RH,
  LD extends any[],
  WS extends Readable<any>[]
>(
  handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,
  config: PaginationConfig<R, LD, WS>
): UsePaginationReturnType<LD, R>;
```

</TabItem>
</Tabs>

## Limitation

**Cache replaceholder mode** and **recovery mode** are temporarily disabled
