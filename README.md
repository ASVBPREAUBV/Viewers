# Viewers
This repo contains the OHIF DICOM Viewer and Lesion Tracker, and various shared meteor packages.

Documentation is available here: http://docs.ohif.org/

### Demos
[OHIF Viewer](http://viewer.ohif.org/) - A general-purpose radiology viewer with a variety of tools exposed.

[Lesion Tracker](http://lesiontracker.ohif.org/) - A prototype viewer focused on oncology metrics.

Community
---------

Have questions?  Try posting on our [google groups forum](https://groups.google.com/forum/#!forum/cornerstone-platform).

## local demo

to run a local demo with connection to a dicom-server [(orthanc server)](https://www.orthanc-server.com/index.php) run:

```
    docker-compose up
```

## Run on server as superuser
METEOR_PACKAGE_DIRS="../Packages" meteor --allow-superuser --settings ../config/orthancDICOMWeb.json