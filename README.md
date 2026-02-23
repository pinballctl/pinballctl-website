# Pinball CTL Website

Official marketing and online documentation site for **Pinball CTL**.

This repository contains the standalone website that was previously hosted inside the main application repo.

## Purpose

- Public-facing project website
- Product overview and feature highlights
- Online documentation pages
- Legal pages (Privacy, Terms, Contact)

## Related Repository

Main Pinball CTL application and runtime stack:

- [VineCode/pinballctl](https://github.com/VineCode/pinballctl)

## Screenshots Utility

This repo includes a screenshot builder similar to `pinballctl-docs`:

- Script: `utils/build-screenshots.py`
- Manifest: `utils/screenshots.txt`

Manifest format:

- One line per screenshot.
- Preferred line format: `<output-path> <json-spec>`
- Example:
  - `assets/img/dashboard.png {"url":"/dashboard","dark_mode":true}`

Common command:

```bash
./utils/build-screenshots.py --dry-run
./utils/build-screenshots.py --domain http://127.0.0.1:8888 --username admin --password password --overwrite
```

Prerequisites:

```bash
python3 -m pip install playwright
python3 -m playwright install chromium
```

`utils/screenshots.txt` is pre-wired to the image files used in `index.html` under `assets/img/`.

## License

See [LICENCE](./LICENCE).
