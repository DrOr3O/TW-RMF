<body>
    <header />
    <main>
        <slot />
    </main>
    <footer>
        <p>© 2023 Not Safe For School. All rights reserved.</p>
    </footer>
</body>

<style>
    body {
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
    }
</style>
