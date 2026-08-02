# Karoot Website Walkthrough

This guide assumes you have never coded before.

## 1. What You Have

This folder contains the Karoot website. It is an informational landing page only.

It does not include:

- Login
- Booking
- Payments
- A database
- The mobile app itself

## 2. Install the One Tool You Need

Install Node.js from:

```text
https://nodejs.org
```

Choose the recommended LTS version.

Node.js lets your computer run this website while you work on it.

## 3. Open the Project Folder

Open a terminal in this folder:

```text
karoot-landing
```

On Windows, you can usually right-click the folder and choose "Open in Terminal".

## 4. Install the Website Packages

Run this command once:

```bash
npm install
```

This downloads the website tools listed in `package.json`.

## 5. Start the Website

Run:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

When you edit the website, the browser updates automatically.

## 6. Edit the Website Words

Most content is in one file:

```text
src/config/site.ts
```

This is the best file to edit first.

Examples:

- Change `hello@karoot.ca` to the real email.
- Change App Store and Google Play links when the app is live.
- Edit FAQ answers.
- Add or remove feature text.

Save the file after editing.

## 7. Edit the App Preview Mockup

The app preview is a simple code-built phone mockup here:

```text
src/components/AppMockup.tsx
```

You can edit the words inside that file later when real app details are ready.

If you eventually have real app screenshots, replace the mockup section with those
screenshots before launch.

## 8. Check the Website Before Deploying

Run:

```bash
npm run build
```

If the command finishes successfully, the website is ready for Vercel.

## 9. Create a GitHub Repo

Create a new GitHub repository named:

```text
karoot-landing
```

Then push this folder to that repo.

## 10. Deploy to Vercel

1. Go to Vercel.
2. Import the `karoot-landing` GitHub repo.
3. Keep the default Next.js settings.
4. Click Deploy.
5. Open the temporary `.vercel.app` link and test the site.

## 11. Connect karoot.ca

In Vercel:

1. Open the project.
2. Go to Project Settings.
3. Go to Domains.
4. Add `karoot.ca`.
5. Add `www.karoot.ca`.
6. Copy the DNS records Vercel gives you.
7. Paste those records into your domain registrar.

DNS can take some time to update.

## 12. Final Launch Check

Check these before sharing the site:

- The home page loads.
- The Privacy Policy page loads.
- The Contact page loads.
- The buttons work.
- The site looks good on a phone.
- The contact email is correct.
- Store links are either placeholders or real app links.
