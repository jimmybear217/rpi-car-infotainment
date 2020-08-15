#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <stdio.h>
#include <string>
#include <iostream>

// script on starting
MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent), ui(new Ui::MainWindow) {
    printf("Settings up MainWindow\n");
    ui->setupUi(this);
    Qt::WindowStates fullScreenState = ui->centralwidget->windowState(); // Qt::WindowFullScreen
    //ui->home_lcdTime->setProperty("value", "123.0");
    //ui->home_progress->setProperty("value", "99");
    //ui->home_html->setProperty("source", "/var/www/html/index.html");
    ui->pageSelector->setProperty("currentIndex", 1);
}

// script on closing
MainWindow::~MainWindow() {
    printf("Closing MainWindow");
    delete ui;
}
