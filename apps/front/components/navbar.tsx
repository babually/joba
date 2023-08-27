"use client"

import {
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Kbd } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Bell, LayoutDashboard, MenuSquare, ScrollText, Settings, Users } from "lucide-react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";

export const TopNavbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<Navbar maxWidth="2xl" position="sticky" className="bg-success-900 ">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarMenuToggle className="sm:hidden" />
				<NavbarBrand as="li" className="gap-3 max-w-fit pr-10">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit text-white">JOBA</p>
					</NextLink>
				</NavbarBrand>
				<ul className="lg:flex lg:gap-4 md:flex md:gap-3 items-center text-white">
					<NavbarItem>
						<Button as={Link} href="/" variant="light" radius="full" size="md" className="text-slate-200 hover:text-slate-100" startContent={<LayoutDashboard size={20} />}>
							Dashboard
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href="/employee" variant="light" radius="full" size="md" className="text-slate-200 hover:text-white" startContent={<Users size={20} />}>
							Employee
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href="/jobs" variant="light" radius="full" size="md" className="text-slate-200 hover:text-white" startContent={<MenuSquare size={20} />}>
							Jobs
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href="/reports" variant="light" radius="full" size="md" className="text-slate-200 hover:text-white" startContent={<ScrollText size={20} />}>
							Reports
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href="/settings" variant="light" radius="full" size="md" className="text-slate-200 hover:text-white" startContent={<Settings size={20} />}>
							Settings
						</Button>
					</NavbarItem>
					{/* {siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium px-3 py-2 bg-slate-200 rounded-full"
								)}
								// startContent={<GithubIcon/>}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))} */}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="md:flex sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				{/* <NavbarItem className="hidden md:flex sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem> */}
				<NavbarItem className="md:hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="md:hidden lg:flex">
					<Button
						isIconOnly
						as={Link}
						className="text-sm font-normal text-white"
						href={siteConfig.links.sponsor}
						variant="flat"
					>
						<Bell/>
					</Button>
				</NavbarItem>
				{/* <ThemeSwitch /> */}
				<Dropdown>
					<NavbarItem>
						<DropdownTrigger>
							<User
								as="button"
								avatarProps={{
									// isBordered: true,
									size: "sm",
									src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
								}}
								className="transition-transform text-white"
								// description="@tonyreichert"
								// name="Tony Reichert"
							/>
						</DropdownTrigger>
					</NavbarItem>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-bold">Signed in as</p>
							<p className="font-bold">@tonyreichert</p>
						</DropdownItem>
						<DropdownItem key="settings">
							<p>My Settings</p>
						</DropdownItem>
						<DropdownItem key="team_settings">
							<p>Team Settings</p>
						</DropdownItem>
						<DropdownItem key="analytics">
							<p>Analytics</p>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

			{/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
			</NavbarContent> */}

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
					{/* {siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))} */}
				</div>
			</NavbarMenu>
		</Navbar>
	);
};
