#ifndef CLOCKWIDGET_H
#define CLOCKWIDGET_H

#include <QWidget>

class clockWidget : public QTextBrowser
{
public:
    clockWidget(QWidget *parent = nullptr, int fontSize = 14);
};

#endif // CLOCKWIDGET_H
