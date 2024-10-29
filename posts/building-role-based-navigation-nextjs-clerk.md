---
title: '🚀 Building a Role Based Navigation in NextJS using Clerk'
author:
  name: Dominic Magnifico
  picture: '/images/dom.jpeg'
image: '/images/blog/navigation.webp'
excerpt: 'We’ve been working on a few projects with fairly complex navigation systems here at House of Giants. Different user types need to see different parts of an application and are separate in what they can see based on the role that they’re assigned. As these applications grow these navigation systems can become unwieldy. We’ve developed a system that we think works pretty well.'
date: '2024-10-29'
---

We’ve been working on a few projects with fairly complex navigation systems here at House of Giants. Different user types need to see different parts of an application and are separate in what they can see based on the role that they’re assigned. As these applications grow these navigation systems can become unwieldy. We’ve developed a system that we think works pretty well.

At a high level, here are a few of the things we’ve found that make role-based navigation tricky:

- ⚖️ Duplicated items across various roles
- 😵‍💫 Hard-to-maintain code when you need to update shared elements
- 🔐 Complex logic around who can see what
- 🔄 Difficulty in adding new roles or items without breaking things

Let’s see how we can alleviate some of these issues.

## 🛠️ Step 1: A Modular Navigation Structure

Using a modular approach gives us the ability to change only what we need, only for the user types that are affected. Keeping logic separate ensures that changing one piece doesn’t create a litany of issues for other users.

### 1. Define Individual Navigation Items

Start by setting up a **single source of truth** for all navigation items. This keeps things consistent and eliminates redundancies. These are just basic objects, customize them and their data based on your needs.

```js
// items.js

export const navItems = {
  admin: {
	text: "Admin Dashboard",
	icon: <svg>cool admin icon</svg>
	href: "/dashboard/admin",
  },
  myTasks: {
    text: "Todos",
    icon: <svg>an icon here</svg>,
    href: "/dashboard/todos"
  },
  profile: {
    text: "Profile",
	icon: <svg>an icon here</svg>,
    href: "/dashboard/profile"
  },
  logout: {
	text: "Logout",
	icon: <svg>logout</svg>,
	logout: true
  },
};
```

### 2. Create Reusable Navigation Sets

At this point we found it helpful to define some commonly used groupings. This lets us build different navigation layouts without repeating ourselves. ✨

```js
// sets.js
export const navSets = {
	userEssentials: ['profile', 'myTasks', 'logout'],
	taskManagement: ['myTasks'],
	adminEssentials: ['admin'],
};
```

### 3. Organize Navigation into Sections

With items and sets defined, we can further organize the navigation into logical sections. This keeps everything structured and makes it easy to add or remove sections later. We’ve opted to create a new [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to further ensure that no duplicate routes are provided. A value in a set may only occur once, duplicates are omitted.

In our case, we’re adding a `text` value to our sections, this acts as the parent dropdown label for the set of navigation items.

```js
// sections.js
import { navSets } from './sets';

export const sections = {
	admin: {
		text: 'Admin',
		children: [...new Set([...navSets.adminEssentials])],
	},
	user: {
		text: 'User',
		children: [...new Set([...navSets.userEssentials])],
	},
};
```

### 4. Configure Role-Based Access

Here’s where we map user roles to the sections they should see. This keeps role-based logic centralized and easy to adjust 🔒 – keep in mind here, we’re using [Clerk](https://clerk.com/) role names here, yours may be different.

```js
// roles.js
export const roleConfig = {
	'org:admin': ['admin', 'user'],
	'org:user': ['user'],
};
```

### 5. Build the Navigation Hook

We decided that building a custom hook here would serve us best when building the UI for the navigation. Our hook assembles the navigation based on the user’s role and will return only the sections relevant to each user.

```js
// ./hooks/navigation/useNavigation.js
import { auth } from '@clerk/nextjs/server';
import { navItems } from '@/config/navigation/items';
import { sections } from '@/config/navigation/sections';
import { roleConfig } from '@/config/navigation/roles';

function getNavigationItems(userRole) {
	const sectionNames = roleConfig[userRole] || roleConfig['org:user'];

	return sectionNames.map((sectionName) => {
		const section = sections[sectionName];
		return {
			text: section.text,
			children: section.children.map((itemKey) => navItems[itemKey]),
		};
	});
}

export async function useNavigation() {
	const { sessionClaims } = await auth();
	const userRole = sessionClaims?.org_role || 'org:user';

	const navigationItems = getNavigationItems(userRole);
	return { navigationItems };
}
```

You’ll see above that we’re creating a function called `getNavigationItems` and passing this function the userRole from Clerk. We then define the `sectionNames` based on that userRole, or default to the nav a basic user would see, providing us with a clean fallback.

We then map over those section names and return the title as well as the nested navigation items.

Finally, we define our hook. We get the User’s role from Clerk using the sessionClaims object that is returned with `await auth()`, thus returning our navigation object, which will look something like this:

```js
[
	{
		text: 'User',
		children: [
			{
				text: 'Todos',
				icon: <svg>an icon here</svg>,
				href: '/dashboard/todos',
			},
			{
				text: 'Profile',
				icon: <svg>an icon here</svg>,
				href: '/dashboard/profile',
			},
			{
				text: 'Logout',
				icon: <svg>logout</svg>,
				logout: true,
			},
		],
	},
];
```

### 🌟 Why This Works

This setup has some awesome advantages:

- **Single Source of Truth** 📚: All navigation items are defined once, cutting down on duplication.
- **Composable Structure** 🧩: You can create new sections easily by reusing existing sets.
- **Easy Maintenance** 🔧: Shared items only need updates in one place.
- **Scalable** 📈: Adding new roles or navigation items is a breeze.
- **Type Safety** ✅: Using keys helps catch typos and enables IDE autocompletion.
- **Logical Structure** 📂: Sections are organized in a clear, modular way.

## Example Usage

Here’s how you might use this navigation structure in a `Sidebar` component:

**File: `Sidebar.js`**

```js
// Sidebar.js
import { useNavigation } from '@/hooks/useNavigation';

function Sidebar() {
	const { navigationItems } = useNavigation();

	return (
		<nav>
			{navigationItems.map((section) => (
				<div key={section.text}>
					<h2>{section.text}</h2>
					<ul>
						{section.children.map((item) => (
							<li key={item.text}>
								<Link href={item.href}>
									{item.icon}
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</nav>
	);
}
```

## 📝 Best Practices

A few tips to keep your navigation organized and manageable:

- 📁 Store navigation items in a separate configuration folder.
- ✨ Use descriptive names for navigation sets and sections.
- ✅ Use `Set` to avoid duplicates.
- 🔒 Set defaults for unknown user

This approach provides a solid foundation for a scalable, maintainable navigation structure. By organizing navigation into modular components, you get a flexible system that grows with your app—without becoming an absolute nightmare to maintain.

Remember, the goal is to strike a balance between flexibility and simplicity. This setup does just that, making it practical for real-world applications. 👌
